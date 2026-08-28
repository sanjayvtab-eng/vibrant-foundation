import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, ChevronLeft, ChevronRight, Pause, RotateCcw, Volume2, VolumeX, Maximize } from "lucide-react";

import qlikPowerBIMigrationImg from "@/assets/qlik_powerbi_migration.jpg";
import buildSmartAppImg from "@/assets/buildsmart_app.jpg";
import postgresSqlServerMigrationImg from "@/assets/postgres_sqlserver_migration.jpg";
import l1AutomationToolImg from "@/assets/l1_automation_tool.jpg";
import qaTestingAppImg from "@/assets/qa_testing_app.jpg";
import tableauPowerBIMigrationImg from "@/assets/tableau_powerbi_migration.jpg";

const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23141414'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' font-family='sans-serif' font-size='16' text-anchor='middle' dominant-baseline='middle'%3EImage Unavailable%3C/text%3E%3C/svg%3E";

const applications = [
  { 
    id: "qlik-to-powerbi", 
    name: "Qlik to Power BI Migration Tool", 
    category: "Migration Tools", 
    description: "Automates the conversion of Qlik Sense applications to Power BI. Maps dashboards, charts, and data models automatically to reduce manual migration effort.", 
    tags: ["Qlik", "Power BI", "Migration", "Automation"], 
    image: qlikPowerBIMigrationImg,
    videoUrl: "https://pxkwgedplrygvqxbckxf.supabase.co/storage/v1/object/public/videos/qlik-to-powerbi-demo.mp4"
  },
  {
    id: "tableau-to-powerbi",
    name: "Tableau to Power BI Migration Tool",
    category: "Migration Tools",
    description: "An AI-powered migration solution that converts Tableau workbooks, data models, calculations, dashboards, and data connections into Power BI-compatible components.",
    tags: ["Tableau", "Power BI", "Migration", "AI"],
    image: tableauPowerBIMigrationImg,
    videoUrl: "https://pxkwgedplrygvqxbckxf.supabase.co/storage/v1/object/public/videos/tableau-to-powerbi-demo.mp4"
  },
  { 
    id: "pg-to-sql", 
    name: "PostgreSQL to SQL Server Migration Tool", 
    category: "Migration Tools", 
    description: "Seamlessly migrate schemas, procedures, and data from PostgreSQL to SQL Server with minimal downtime and automated datatype mapping.", 
    tags: ["Migration", "SQL", "ETL"], 
    image: postgresSqlServerMigrationImg,
    videoUrl: "https://pxkwgedplrygvqxbckxf.supabase.co/storage/v1/object/public/videos/postgres-to-sqlserver-demo.mp4"
  },
  { 
    id: "buildsmart", 
    name: "BuildSmart Application", 
    category: "Construction", 
    description: "AI-driven computer vision platform for construction sites. Monitors safety compliance, tracks project progress, and detects PPE violations in real-time.", 
    tags: ["Estimation", "ML", "Planning"], 
    image: buildSmartAppImg,
    videoUrl: "https://pxkwgedplrygvqxbckxf.supabase.co/storage/v1/object/public/videos/Buildsmart%20Demo%20Video.mp4"
  },
  { 
    id: "l1-automation", 
    name: "L1 Automation Tool", 
    category: "Enterprise Automation", 
    description: "Intelligent IT service desk automation that resolves Level 1 support tickets without human intervention using advanced natural language processing.", 
    tags: ["AI", "Automation", "Support"], 
    image: l1AutomationToolImg,
    videoUrl: "https://pxkwgedplrygvqxbckxf.supabase.co/storage/v1/object/public/videos/L1%20Automation%20Demo%20Video.mp4"
  },
  { 
    id: "qa-testing", 
    name: "QA Testing Application", 
    category: "Quality Assurance", 
    description: "End-to-end automated testing suite for enterprise applications. Generates test cases, executes cross-browser tests, and provides visual regression analysis.", 
    tags: ["QA", "Testing", "Automation"], 
    image: qaTestingAppImg,
    videoUrl: "https://pxkwgedplrygvqxbckxf.supabase.co/storage/v1/object/public/videos/qa-testing-demo.mp4"
  }
];

function CustomVideoPlayer({ 
  videoUrl, 
  appName, 
  onNext, 
  onPrev, 
  totalVideos,
  currentIndex,
  onClose
}: { 
  videoUrl: string; 
  appName: string; 
  onNext: () => void; 
  onPrev: () => void;
  totalVideos: number;
  currentIndex: number;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(e => {
          console.log("Autoplay prevented:", e);
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, videoUrl]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying(!isPlaying);
  };
  
  const rewind = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
    }
  };

  return (
    <div className="relative w-full h-[90vh] md:aspect-video md:h-auto bg-[#050B14] group flex flex-col justify-center overflow-hidden font-[family-name:var(--font-sans)]">
      
      {/* Top Left Branding */}
      <div className="absolute top-6 left-6 z-20 flex flex-col transition-opacity duration-300">
         <div className="inline-flex items-center gap-3 rounded-2xl bg-[#0F1623]/90 backdrop-blur-md px-5 py-3 border border-white/5 shadow-2xl">
           <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
           <div className="flex flex-col">
             <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest leading-none mb-1.5">Demo Showcase</span>
             <span className="text-sm font-bold text-white leading-none">{appName}</span>
           </div>
         </div>
      </div>

      {/* Top Right Controls */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3 transition-opacity duration-300">
         <button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-500 border border-yellow-500/30 px-4 py-2 text-xs font-bold transition-colors">
           <span className="opacity-80">↗</span> Show Text
         </button>
         <button onClick={togglePlay} className="inline-flex items-center gap-2 rounded-xl bg-[#0F1623]/90 backdrop-blur-md px-4 py-2 text-xs font-bold text-white border border-white/5 hover:bg-white/10 transition-colors">
           {isPlaying ? <Pause className="w-3.5 h-3.5 text-yellow-500" /> : <Play className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />}
           {isPlaying ? 'Pause' : 'Play'}
         </button>
         <div className="flex gap-1.5 ml-2">
           <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="p-2 rounded-xl bg-[#0F1623]/90 backdrop-blur-md border border-white/5 hover:bg-white/10 transition-colors">
             <ChevronLeft className="w-4 h-4 text-white/70" />
           </button>
           <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="p-2 rounded-xl bg-[#0F1623]/90 backdrop-blur-md border border-white/5 hover:bg-white/10 transition-colors">
             <ChevronRight className="w-4 h-4 text-white/70" />
           </button>
         </div>
      </div>

      {videoError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-black">
          <p className="text-white mb-4">Demo video unavailable</p>
          <p className="text-sm text-white/50 text-center">
            The requested video ({videoUrl.split('/').pop()}) could not be loaded.
          </p>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={videoUrl}
          playsInline
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={() => { setIsPlaying(false); onNext(); }}
          onError={() => setVideoError(true)}
          className="w-full h-full object-contain cursor-pointer"
          onClick={togglePlay}
        />
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-[#0F1623]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-4 shadow-2xl flex flex-col gap-3">
          
          {/* Progress Bar */}
          <div className="flex items-center w-full">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
          
          {/* Toolbar */}
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-5">
               <button onClick={togglePlay} className="text-white hover:text-cyan-400 transition-colors">
                 {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
               </button>
               <button onClick={rewind} className="text-white/70 hover:text-cyan-400 transition-colors">
                 <RotateCcw className="w-4 h-4" />
               </button>
               <button onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }} className="text-white/70 hover:text-cyan-400 transition-colors">
                 {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
               </button>
               <span className="text-xs text-white/60 font-mono tracking-wider ml-2">
                 {formatTime(currentTime)} <span className="text-white/30">/</span> {formatTime(duration)}
               </span>
             </div>

             {/* Center Dots */}
             <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
               {Array.from({length: totalVideos}).map((_, idx) => (
                 <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'w-1.5 bg-white/20'}`} />
               ))}
             </div>

             <div className="flex items-center gap-5">
               <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 hidden sm:block">
                 {appName}
               </span>
               <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} className="text-yellow-500 hover:text-yellow-400 transition-colors p-1.5 rounded-full bg-yellow-500/10">
                 <Maximize className="w-4 h-4" />
               </button>
             </div>
          </div>
        </div>
      </div>
      
      {/* Hidden Dialog Title for Accessibility */}
      <DialogTitle className="sr-only">{appName} Demo Video</DialogTitle>
    </div>
  );
}

export function EnterprisePortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  // Track which video is currently playing in the modal
  const [modalVideoIndex, setModalVideoIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % applications.length);
  };
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + applications.length) % applications.length);
  };
  const app = applications[activeIndex];

  const openVideo = (appIndex: number) => {
    setModalVideoIndex(appIndex);
    setVideoModalOpen(true);
  };

  const nextModalVideo = () => {
    setModalVideoIndex((prev) => (prev + 1) % applications.length);
  };

  const prevModalVideo = () => {
    setModalVideoIndex((prev) => (prev - 1 + applications.length) % applications.length);
  };

  return (
    <section className="mx-auto max-w-[1528px] px-5 py-24 lg:px-10">
      <div className="text-center mb-16 relative">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--gradient-brand)" }}
        />
        <h2 className="relative font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-none tracking-[-0.03em] mb-6">
          Explore Our <span className="text-gradient">Enterprise Applications</span>
        </h2>
        <p className="relative mx-auto max-w-2xl text-lg leading-[1.63] text-muted-foreground">
          Watch AI-enhanced product demonstrations and explore application capabilities.
        </p>
      </div>

      <div className="relative w-full min-h-[500px] md:min-h-[600px] rounded-3xl overflow-hidden border border-border shadow-2xl group mb-20">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black">
          <img 
            src={app.image} 
            alt={app.name} 
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
              e.currentTarget.onerror = null;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>

        {/* Top Controls */}
        <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
          <button onClick={prevSlide} className="p-2 rounded-full bg-background/50 backdrop-blur-md border border-border hover:bg-background/80 transition-colors">
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full bg-background/50 backdrop-blur-md border border-border hover:bg-background/80 transition-colors">
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full md:w-3/5 h-full p-8 md:p-16 flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground border border-border/50">
              Featured Platform Showcase
            </div>
          </div>
          
          <div className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            {app.category}
          </div>
          
          <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
            {app.name}
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            {app.description}
          </p>
          
          <div className="mb-10 p-5 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm max-w-xl">
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Tech Stack</div>
             <div className="flex flex-wrap gap-2">
               {app.tags.map(tag => (
                 <span key={tag} className="inline-flex items-center rounded-md bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-cyan-400 ring-1 ring-inset ring-cyan-400/30">
                   {tag}
                 </span>
               ))}
             </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-auto">
            <button 
              onClick={() => openVideo(activeIndex)}
              className="inline-flex justify-center items-center gap-2 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3.5 text-sm md:text-base font-bold transition-transform duration-200 hover:-translate-y-0.5 shadow-lg shadow-accent/20"
            >
              <Play className="h-5 w-5 fill-current" />
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border">
          {applications.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-6 bg-accent" : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>

      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-6xl p-0 overflow-hidden bg-transparent border-none shadow-2xl">
          {videoModalOpen && (
            <CustomVideoPlayer 
              videoUrl={applications[modalVideoIndex].videoUrl}
              appName={applications[modalVideoIndex].name}
              onNext={nextModalVideo}
              onPrev={prevModalVideo}
              totalVideos={applications.length}
              currentIndex={modalVideoIndex}
              onClose={() => setVideoModalOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
