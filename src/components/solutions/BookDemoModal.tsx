import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { APPLICATIONS } from "@/data/applications";

type Props = {
  open: boolean;
  selectedApp: string;
  onOpenChange: (open: boolean) => void;
};

type Fields = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  application: string;
  preferredAt: string;
  message: string;
};

const empty: Fields = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  application: "",
  preferredAt: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40";

const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground";

export function BookDemoModal({ open, selectedApp, onOpenChange }: Props) {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setValues({ ...empty, application: selectedApp });
      setErrors({});
      setSubmitted(false);
    }
  }, [open, selectedApp]);

  const set = (key: keyof Fields) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  function validate(v: Fields) {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (v.fullName.trim().length < 2) e.fullName = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      e.email = "Enter a valid business email.";
    if (v.company.trim().length < 2) e.company = "Enter your company name.";
    if (!/^[+]?[\d\s()-]{7,20}$/.test(v.phone.trim()))
      e.phone = "Enter a valid phone number.";
    if (!v.application) e.application = "Select an application.";
    if (!v.preferredAt) e.preferredAt = "Choose a preferred date and time.";
    if (v.message.trim().length < 10)
      e.message = "Tell us a little about your requirement (10+ characters).";
    return e;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-[min(42rem,calc(100vw-2rem))] overflow-y-auto rounded-3xl border-border bg-elevated">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight">
            Book a personalized demo
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Tell us about your use case and our team will confirm a slot by email.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="rounded-2xl border border-border bg-background p-6 text-sm">
            <p className="font-semibold text-foreground">Request received.</p>
            <p className="mt-2 text-muted-foreground">
              Thanks {values.fullName.split(" ")[0]} — we'll reach out at {values.email} to
              confirm your {values.application} demo.
            </p>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Full name"
              error={errors.fullName}
              id="bd-name"
              value={values.fullName}
              onChange={set("fullName")}
              placeholder="Jane Doe"
            />
            <Field
              label="Business email"
              error={errors.email}
              id="bd-email"
              type="email"
              value={values.email}
              onChange={set("email")}
              placeholder="jane@company.com"
            />
            <Field
              label="Company name"
              error={errors.company}
              id="bd-company"
              value={values.company}
              onChange={set("company")}
              placeholder="Company Inc."
            />
            <Field
              label="Phone number"
              error={errors.phone}
              id="bd-phone"
              type="tel"
              value={values.phone}
              onChange={set("phone")}
              placeholder="+1 555 000 1234"
            />

            <div>
              <label className={labelClass} htmlFor="bd-app">
                Selected application
              </label>
              <select
                id="bd-app"
                className={inputClass}
                value={values.application}
                onChange={(e) => set("application")(e.target.value)}
              >
                <option value="">Select an application</option>
                {APPLICATIONS.map((a) => (
                  <option key={a.id} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>
              {errors.application ? <ErrorText>{errors.application}</ErrorText> : null}
            </div>

            <Field
              label="Preferred date & time"
              error={errors.preferredAt}
              id="bd-when"
              type="datetime-local"
              value={values.preferredAt}
              onChange={set("preferredAt")}
            />

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="bd-message">
                Message or requirement
              </label>
              <textarea
                id="bd-message"
                rows={4}
                className={inputClass}
                value={values.message}
                onChange={(e) => set("message")(e.target.value)}
                placeholder="What would you like to see in the demo?"
              />
              {errors.message ? <ErrorText>{errors.message}</ErrorText> : null}
            </div>

            <DialogFooter className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-[image:var(--gradient-brand)] px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                Submit request
              </button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-destructive">{children}</p>;
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}
