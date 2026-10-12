import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Play, Pause, RotateCcw, ZoomIn, X } from 'lucide-react';

// Dictionaries from original Opening Heal Queue(1).html and Heal Queue(1).html
const D: Record<string, any> = {
  tag: ['Less wait, better care.', 'कम इंतज़ार, बेहतर देखभाल।', 'ಕಡಿಮೆ ಕಾಯುವಿಕೆ, ಉತ್ತಮ ಆರೈಕೆ.'],
  wt: ['Hello, welcome to Heal Queue', 'नमस्ते, हील क्यू में आपका स्वागत है', 'ನಮಸ್ಕಾರ, ಹೀಲ್ ಕ್ಯೂಗೆ ಸ್ವಾಗತ'],
  ws: [
    "I'll tell you where you are in line, help you book visits and keep your reports safe.",
    'मैं बताऊँगा कि कतार में आप कहाँ हैं, विज़िट बुक करने और रिपोर्ट सहेजने में मदद करूँगा।',
    'ಸರದಿಯಲ್ಲಿ ನೀವು ಎಲ್ಲಿದ್ದೀರಿ ಎಂದು ಹೇಳುತ್ತೇನೆ, ಭೇಟಿ ಬುಕ್ ಮಾಡಲು ಮತ್ತು ವರದಿಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಲು ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.'
  ],
  lg: ['Choose your language', 'अपनी भाषा चुनें', 'ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ'],
  mb: ['Mobile number', 'मोबाइल नंबर', 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ'],
  ct: ['Continue', 'आगे बढ़ें', 'ಮುಂದುವರಿಸಿ'],
  sent: ['Code sent to +91 {n}', '+91 {n} पर कोड भेजा गया', '+91 {n} ಗೆ ಕೋಡ್ ಕಳುಹಿಸಲಾಗಿದೆ'],
  as: [
    'No smartphone? Ask at reception for a printed token.',
    'स्मार्टफ़ोन नहीं है? रिसेप्शन पर छपा टोकन माँगें।',
    'ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಇಲ್ಲವೇ? ಸ್ವಾಗತ ಕೌಂಟರ್‌ನಲ್ಲಿ ಮುದ್ರಿತ ಟೋಕನ್ ಕೇಳಿ.'
  ],
  hi: ['Good morning, Asha', 'नमस्ते, आशा', 'ನಮಸ್ಕಾರ, ಆಶಾ'],
  ahd: ['ahead of you', 'आपके आगे', 'ನಿಮ್ಮ ಮುಂದೆ'],
  mn: ['about {m} min', 'लगभग {m} मिनट', 'ಸುಮಾರು {m} ನಿಮಿಷ'],
  go: ['Go in', 'अंदर जाएँ', 'ಒಳಗೆ ಹೋಗಿ'],
  m4: [
    'The doctor is finishing with the previous patient. Thank you for your patience.',
    'डॉक्टर पिछले मरीज़ को देख रहे हैं। धैर्य के लिए धन्यवाद।',
    'ವೈದ್ಯರು ಹಿಂದಿನ ರೋಗಿಯನ್ನು ನೋಡುತ್ತಿದ್ದಾರೆ. ತಾಳ್ಮೆಗೆ ಧನ್ಯವಾದಗಳು.'
  ],
  m3: [
    'Almost there. Please stay close to the waiting area.',
    'बस थोड़ा और। कृपया प्रतीक्षा क्षेत्र के पास रहें।',
    'ಇನ್ನು ಸ್ವಲ್ಪ ಹೊತ್ತು. ದಯವಿಟ್ಟು ಕಾಯುವ ಜಾಗದ ಹತ್ತಿರವೇ ಇರಿ.'
  ],
  m1: [
    "You're next. Please take a deep breath and get ready.",
    'अगली बारी आपकी है। गहरी साँस लें और तैयार हो जाएँ।',
    'ಮುಂದಿನ ಸರದಿ ನಿಮ್ಮದು. ಒಂದು ಆಳವಾದ ಉಸಿರು ತೆಗೆದುಕೊಂಡು ಸಿದ್ಧರಾಗಿ.'
  ],
  m0: [
    "It's your turn. Please go to Room 204.",
    'आपकी बारी है। कृपया कमरा 204 में जाएँ।',
    'ನಿಮ್ಮ ಸರದಿ. ದಯವಿಟ್ಟು ಕೊಠಡಿ 204 ಕ್ಕೆ ಹೋಗಿ.'
  ],
  here: ["I'm here", 'मैं यहाँ हूँ', 'ನಾನು ಇಲ್ಲಿದ್ದೇನೆ'],
  ci: ['Checked in', 'चेक-इन हो गया', 'ಚೆಕ್-ಇನ್ ಆಗಿದೆ'],
  help: ['Ask a person', 'किसी से पूछें', 'ಯಾರನ್ನಾದರೂ ಕೇಳಿ'],
  bkS: ['Book', 'बुकिंग', 'ಬುಕ್'],
  rxS: ['Prescriptions', 'दवाइयाँ', 'ಔಷಧಿಗಳು'],
  rpS: ['Reports', 'रिपोर्ट', 'ವರದಿಗಳು'],
  pay: ['Pay', 'भुगतान', 'ಪಾವತಿ'],
  fb: ['Feedback', 'प्रतिक्रिया', 'ಅಭಿಪ್ರಾಯ'],
  cl: ['Clinics', 'क्लिनिक', 'ಕ್ಲಿನಿಕ್'],
  back: ['Back', 'वापस', 'ಹಿಂದೆ'],
  bk: ['Book an appointment', 'अपॉइंटमेंट बुक करें', 'ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ'],
  dp: ['Department', 'विभाग', 'ವಿಭಾಗ'],
  dps: [
    ['General Medicine', 'जनरल मेडिसिन', 'ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ'],
    ['Dermatology', 'त्वचा रोग', 'ಚರ್ಮರೋಗ'],
    ['Cardiology', 'हृदय रोग', 'ಹೃದಯರೋಗ']
  ],
  dy: ['Day', 'दिन', 'ದಿನ'],
  tm: ['Time', 'समय', 'ಸಮಯ'],
  cf: ['Confirm booking', 'बुकिंग पक्की करें', 'ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಿ'],
  dn: [
    "Booked. We'll remind you the day before.",
    'बुक हो गया। एक दिन पहले याद दिलाएँगे।',
    'ಬುಕ್ ಆಗಿದೆ. ಒಂದು ದಿನ ಮುಂಚೆ ನೆನಪಿಸುತ್ತೇವೆ.'
  ],
  mo: ['Morning', 'सुबह', 'ಬೆಳಿಗ್ಗೆ'],
  ni: ['Night', 'रात', 'ರಾತ್ರಿ'],
  af: ['after food', 'खाने के बाद', 'ಊಟದ ನಂತರ'],
  dl: ['{n} days left', '{n} दिन बचे', '{n} ದಿನ ಬಾಕಿ'],
  rf: ['Order refill', 'रिफ़िल मँगाएँ', 'ರೀಫಿಲ್ ಕೇಳಿ'],
  rd: ['Refill requested', 'रिफ़िल का अनुरोध भेजा', 'ರೀಫಿಲ್ ವಿನಂತಿ ಕಳುಹಿಸಲಾಗಿದೆ'],
  ry: ['Ready', 'तैयार', 'ಸಿದ್ಧ'],
  pr: ['Processing', 'प्रक्रिया में', 'ಸಿದ್ಧವಾಗುತ್ತಿದೆ'],
  sh: ['Share with doctor', 'डॉक्टर को भेजें', 'ವೈದ್ಯರಿಗೆ ಕಳುಹಿಸಿ'],
  due: ['To pay', 'देय राशि', 'ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ'],
  co: ['Consultation', 'परामर्श', 'ಸಮಾಲೋಚನೆ'],
  lb: ['Lab tests', 'लैब जाँच', 'ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆ'],
  upi: ['Pay with UPI', 'UPI से भुगतान', 'UPI ಮೂಲಕ ಪಾವತಿ'],
  cs: ['Pay at the counter', 'काउंटर पर भुगतान', 'ಕೌಂಟರ್‌ನಲ್ಲಿ ಪಾವತಿ'],
  fq: ['How was your wait?', 'आपका इंतज़ार कैसा रहा?', 'ನಿಮ್ಮ ಕಾಯುವಿಕೆ ಹೇಗಿತ್ತು?'],
  th: ['Thank you. Your feedback reached us.', 'धन्यवाद, आपकी बात हम तक पहुँच गई।', 'ಧನ್ಯವಾದ, ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ ತಲುಪಿದೆ.'],
  nr: ['Nearby clinics', 'पास के क्लिनिक', 'ಹತ್ತಿರದ ಕ್ಲಿನಿಕ್‌ಗಳು']
};

const LANG_NAMES = ['English', 'हिन्दी', 'ಕನ್ನಡ'];
const SHORT_LANG = ['EN', 'हि', 'ಕ'];
const DOCTORS = ['Dr. Mehta', 'Dr. Rao', 'Dr. Nair'];
const DAYS = ['Mon 26', 'Tue 27', 'Wed 28'];
const SLOTS = ['9:30', '10:00', '11:15'];
const MEDS = [
  ['Paracetamol 500 mg', 5],
  ['Vitamin D3 60k IU', 3]
];

// Presentation sequence stages
type StageId = 'splash' | 'welcome' | 'home' | 'book' | 'rx' | 'rep' | 'pay';

interface StageMeta {
  id: StageId;
  label: string;
  durationMs: number;
}

const SEQUENCE_STAGES: StageMeta[] = [
  { id: 'splash', label: '01 Opening', durationMs: 4200 },
  { id: 'welcome', label: '02 Onboarding', durationMs: 4400 },
  { id: 'home', label: '03 Live Queue', durationMs: 5600 },
  { id: 'book', label: '04 Booking', durationMs: 4200 },
  { id: 'rx', label: '05 Prescriptions', durationMs: 3800 },
  { id: 'rep', label: '06 Diagnostics', durationMs: 3600 },
  { id: 'pay', label: '07 Billing', durationMs: 3400 }
];

export const HealingTheWaitSection: React.FC = () => {
  // Prototype State mirroring both HTML applications
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [lang, setLang] = useState<number>(0);
  const [num, setNum] = useState<string>('9876543210');
  const [otpSent, setOtpSent] = useState<boolean>(true);
  const [ahead, setAhead] = useState<number>(4);
  const [isCheckedIn, setIsCheckedIn] = useState<boolean>(false);
  const [dept, setDept] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [slot, setSlot] = useState<number>(1);
  const [isBooked, setIsBooked] = useState<boolean>(true);
  const [rxRefills, setRxRefills] = useState<number[]>([1, 0]);
  const [feedback, setFeedback] = useState<number>(-1);
  const [isBigText, setIsBigText] = useState<boolean>(false);

  // Automation & User override state
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const [stageProgress, setStageProgress] = useState<number>(0);

  // Modal zoom for booklet photographs
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const containerRef = useRef<HTMLElement>(null);
  const interactionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stageStartTimeRef = useRef<number>(Date.now());

  const currentStage = SEQUENCE_STAGES[stageIndex];

  // Translation helper
  const t = useCallback(
    (key: string, replacements: Record<string, any> = {}) => {
      let str = D[key]?.[lang] || '';
      for (const k in replacements) {
        str = str.replace('{' + k + '}', replacements[k]);
      }
      return str;
    },
    [lang]
  );

  const sayQueueMessage = useCallback(() => {
    if (ahead >= 4) return t('m4');
    if (ahead >= 2) return t('m3');
    if (ahead === 1) return t('m1');
    return t('m0');
  }, [ahead, t]);

  // Viewport intersection observer: only animate when in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInViewport(entry.isIntersecting && entry.intersectionRatio > 0.08);
      },
      { threshold: [0.08, 0.25, 0.5] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsAutoPlaying(false);
    }
  }, []);

  // Handle stage specific simulated micro-interactions during auto-play
  useEffect(() => {
    if (!isAutoPlaying || isUserInteracting) return;

    if (currentStage.id === 'splash') {
      // Reset splash cycle
      setAhead(4);
      setIsCheckedIn(false);
    } else if (currentStage.id === 'welcome') {
      setOtpSent(false);
      const timer = setTimeout(() => {
        setOtpSent(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (currentStage.id === 'home') {
      // Simulate queue progression: 4 -> 3 -> 1 -> 0
      const timer1 = setTimeout(() => setIsCheckedIn(true), 1200);
      const timer2 = setTimeout(() => setAhead(3), 2400);
      const timer3 = setTimeout(() => setAhead(1), 3800);
      const timer4 = setTimeout(() => setAhead(0), 4800);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    } else if (currentStage.id === 'book') {
      setIsBooked(false);
      const timer = setTimeout(() => {
        setIsBooked(true);
      }, 2200);
      return () => clearTimeout(timer);
    } else if (currentStage.id === 'rx') {
      setRxRefills([0, 0]);
      const timer = setTimeout(() => {
        setRxRefills([1, 0]);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [stageIndex, isAutoPlaying, isUserInteracting, currentStage.id]);

  // Master auto-advancement loop
  useEffect(() => {
    if (!isAutoPlaying || isUserInteracting || !isInViewport) return;

    stageStartTimeRef.current = Date.now();
    const duration = currentStage.durationMs;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - stageStartTimeRef.current;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setStageProgress(pct);
    }, 100);

    const advanceTimer = setTimeout(() => {
      setStageIndex((prev) => (prev + 1) % SEQUENCE_STAGES.length);
      setStageProgress(0);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(advanceTimer);
    };
  }, [stageIndex, isAutoPlaying, isUserInteracting, isInViewport, currentStage.durationMs]);

  // Handle user manual interaction: pauses auto-demo and sets resume idle timer
  const handleUserAction = () => {
    setIsUserInteracting(true);
    setIsAutoPlaying(false);

    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }

    // Auto-resume after 8 seconds of inactivity
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
      setIsAutoPlaying(true);
    }, 8000);
  };

  const jumpToStage = (idx: number) => {
    setStageIndex(idx);
    setStageProgress(0);
    stageStartTimeRef.current = Date.now();
  };

  const togglePlayPause = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setIsUserInteracting(true);
    } else {
      setIsAutoPlaying(true);
      setIsUserInteracting(false);
      stageStartTimeRef.current = Date.now();
    }
  };

  const resetSequence = () => {
    setStageIndex(0);
    setAhead(4);
    setIsCheckedIn(false);
    setIsBooked(false);
    setRxRefills([0, 0]);
    setFeedback(-1);
    setIsAutoPlaying(true);
    setIsUserInteracting(false);
    setStageProgress(0);
    stageStartTimeRef.current = Date.now();
  };

  // SVG parameters for the queue ring
  const ringCircumference = 2 * Math.PI * 94; // ~590.6
  const maxQueueCapacity = 5;

  return (
    <article
      id="project-healing-the-wait"
      ref={containerRef}
      className="group relative pt-4 pb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
    >
      {/* 0. Top Project Identification Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-3 mb-8 sm:mb-12 font-mono text-xs text-[#8E8278]">
        <div className="flex items-center gap-3">
          <span className="text-[#722F37] font-bold text-sm">05 /</span>
          <span className="text-[#F4F0E8] font-medium tracking-[0.16em] uppercase">
            HUMAN-CENTRED DESIGN · DESIGN THINKING
          </span>
        </div>

        <div className="text-[11px] text-[#8E8278] font-mono tracking-wider">
          <span>Academic Research &amp; Service Innovation</span>
        </div>
      </div>

      {/* 1. Main Title & Identity Presentation */}
      <div className="space-y-6 mb-12 sm:mb-16">
        <div className="space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#722F37] font-semibold block">
            THE SPACE BETWEEN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#F4F0E8] font-normal leading-[1.05] tracking-tight">
            Healing the Wait
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#C8BFB2] italic font-light pt-0.5">
            "Waiting for care shouldn't leave you in uncertainty."
          </p>
          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light max-w-4xl leading-relaxed pt-2">
            In hospitals, the uncertainty of not knowing when your turn will come can turn waiting into an experience of
            anxiety, frustration, and helplessness. <strong className="text-[#F4F0E8] font-normal">The Space Between</strong> explores
            this overlooked part of the patient journey through design research, resulting in a publication and{' '}
            <strong className="text-[#7FCCC4] font-normal">Heal Queue</strong> — a proposed digital experience for queue tracking,
            appointment booking, and patient updates.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-[#8E8278]">
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#7FCCC4]">
              Research
            </span>
            <span className="text-[#38332F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#F4F0E8]">
              Experience Design
            </span>
            <span className="text-[#38332F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#F4F0E8]">
              Digital Prototyping
            </span>
            <span className="text-[#38332F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#C8BFB2]">
              Multilingual UX (EN / HI / KN)
            </span>
          </div>
        </div>
      </div>

      {/* 2. THE MAIN SHOWCASE (7-Col Phone Experience + 5-Col Booklet Photos) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start mb-16 sm:mb-24 pt-6 border-t border-[#262320]">
        
        {/* Left / Dominant Column (7 cols): Real Animated Heal Queue Experience */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Showcase Control Bar & Timeline Scrubber */}
          <div className="w-full max-w-[420px] mb-4 space-y-3">
            
            {/* Top Playback Status Pill & Controls */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-[#262320] bg-[#141211]/90 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isAutoPlaying ? 'bg-[#7FCCC4] animate-pulse' : 'bg-[#A87578]'
                  }`}
                />
                <span className={isAutoPlaying ? 'text-[#7FCCC4]' : 'text-[#A87578]'}>
                  {isAutoPlaying ? 'AUTO-PLAYING DEMO' : 'INTERACTIVE MODE'}
                </span>
                <span className="text-[#8E8278] hidden sm:inline">
                  ({stageIndex + 1}/{SEQUENCE_STAGES.length})
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={togglePlayPause}
                  aria-label={isAutoPlaying ? 'Pause presentation' : 'Play presentation'}
                  className="p-1.5 rounded-lg border border-[#262320] bg-[#1A1715] text-[#F4F0E8] hover:border-[#722F37] hover:text-[#7FCCC4] transition-colors cursor-pointer"
                  title={isAutoPlaying ? 'Pause Auto-Demo' : 'Resume Auto-Demo'}
                >
                  {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={resetSequence}
                  aria-label="Restart presentation from beginning"
                  className="p-1.5 rounded-lg border border-[#262320] bg-[#1A1715] text-[#F4F0E8] hover:border-[#722F37] hover:text-[#7FCCC4] transition-colors cursor-pointer"
                  title="Restart Opening"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sequence Stage Selector Pills */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 text-[10px] font-mono">
              {SEQUENCE_STAGES.map((stg, idx) => {
                const isActive = stageIndex === idx;
                return (
                  <button
                    key={stg.id}
                    type="button"
                    onClick={() => {
                      jumpToStage(idx);
                      handleUserAction();
                    }}
                    className={`px-1.5 py-1.5 rounded-md border text-center transition-all cursor-pointer truncate ${
                      isActive
                        ? 'border-[#7FCCC4] bg-[#002F42]/80 text-[#7FCCC4] font-semibold shadow-[0_0_12px_rgba(127,204,196,0.3)]'
                        : 'border-[#262320] bg-[#141211]/60 text-[#8E8278] hover:border-[#38332F] hover:text-[#C8BFB2]'
                    }`}
                  >
                    <span>{stg.label.split(' ')[0]}</span>
                    {isActive && isAutoPlaying && (
                      <div className="w-full bg-[#1A1715] h-[2px] mt-1 rounded-full overflow-hidden">
                        <div
                          className="bg-[#7FCCC4] h-full transition-all duration-100 ease-linear"
                          style={{ width: `${stageProgress}%` }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Physical Phone Frame (Refined Luxury Device Mockup) */}
          <div className="relative w-full max-w-[380px] p-2 sm:p-2.5 rounded-[44px] bg-gradient-to-b from-[#2A2624] via-[#1A1816] to-[#0E0C0B] border border-[#3D3733] shadow-[0_25px_60px_-15px_rgba(0,47,66,0.7),0_0_0_1px_rgba(127,204,196,0.12)]">
            
            {/* Phone Screen Container */}
            <div
              className={`relative w-full h-[640px] sm:h-[680px] rounded-[36px] overflow-hidden flex flex-col text-white font-['Outfit',sans-serif] select-none ${
                isBigText ? 'text-[118%]' : 'text-[16px]'
              }`}
              style={{
                background: 'linear-gradient(175deg, #002F42 0%, #005E85 70%, #153579 100%)'
              }}
              onClick={handleUserAction}
            >
              
              {/* Speaker / Camera Notch Pill */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1 rounded-full bg-[#001D29]/80 border border-white/10 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7FCCC4]/60" />
                <div className="w-8 h-1 rounded-full bg-white/20" />
              </div>

              {/* STAGE 0: Opening Splash (from Opening Heal Queue.html) */}
              {currentStage.id === 'splash' && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                  <div className="relative w-48 h-48 mb-6">
                    <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                      <circle
                        cx="100"
                        cy="100"
                        r="88"
                        fill="none"
                        stroke="#ffffff26"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="88"
                        fill="none"
                        stroke="#7FCCC4"
                        strokeWidth="12"
                        strokeLinecap="round"
                        className="transition-all duration-[2000ms] ease-out"
                        style={{
                          strokeDasharray: 553,
                          strokeDashoffset: 0
                        }}
                      />
                    </svg>
                    <b className="absolute inset-0 grid place-content-center text-5xl font-semibold tracking-tight text-white animate-fadeIn">
                      HQ
                    </b>
                  </div>

                  <div className="space-y-2 animate-fadeIn">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white m-0">
                      Heal Queue
                    </h1>
                    <p className="text-[#9EC5DD] text-base sm:text-lg m-0 font-normal">
                      {t('tag')}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      jumpToStage(1);
                      handleUserAction();
                    }}
                    className="mt-8 px-5 py-2 rounded-full border border-white/30 text-xs font-mono tracking-wider text-white/80 hover:bg-white/10 transition-colors"
                  >
                    Skip to Welcome →
                  </button>
                </div>
              )}

              {/* STAGE 1: Onboarding & Welcome (from Opening Heal Queue.html) */}
              {currentStage.id === 'welcome' && (
                <div className="flex-1 overflow-y-auto p-5 sm:p-6 pt-10 flex flex-col justify-between animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 text-[#9EC5DD] text-sm">
                      <div className="w-8 h-8 rounded-full bg-[#7FCCC4] text-[#002F42] grid place-content-center font-bold text-sm">
                        H
                      </div>
                      <span className="font-semibold">Heal Queue</span>
                    </div>

                    <div className="bg-white/[0.11] rounded-[20px] rounded-bl-sm p-4 space-y-1.5 border border-white/10">
                      <h2 className="text-xl sm:text-2xl font-semibold text-white leading-tight m-0">
                        {t('wt')}
                      </h2>
                      <p className="text-[#DCEBF4] text-xs sm:text-sm font-light leading-relaxed m-0">
                        {t('ws')}
                      </p>
                    </div>

                    <div>
                      <b className="block text-xs font-semibold text-[#DCEBF4] mb-2">
                        {t('lg')}
                      </b>
                      <div className="flex gap-2">
                        {LANG_NAMES.map((name, i) => (
                          <button
                            key={name}
                            type="button"
                            onClick={() => {
                              setLang(i);
                              handleUserAction();
                            }}
                            className={`flex-1 py-2.5 rounded-full border text-xs sm:text-sm font-medium transition-all ${
                              lang === i
                                ? 'bg-[#9EC5DD] border-[#9EC5DD] text-[#002F42] font-semibold'
                                : 'border-white/30 text-white hover:border-white/60'
                            }`}
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="m-input" className="block text-xs font-semibold text-[#DCEBF4] mb-2">
                        {t('mb')}
                      </label>
                      <div className="flex items-center rounded-full bg-white/[0.11] border border-white/30 overflow-hidden px-4 py-2.5">
                        <span className="text-[#9EC5DD] font-semibold text-sm mr-2">+91</span>
                        <input
                          id="m-input"
                          type="tel"
                          value={num}
                          onChange={(e) => {
                            setNum(e.target.value.replace(/\D/g, ''));
                            setOtpSent(false);
                            handleUserAction();
                          }}
                          placeholder="98765 43210"
                          className="bg-transparent border-0 text-white font-mono text-sm tracking-wider focus:outline-none flex-1"
                          maxLength={10}
                        />
                      </div>
                    </div>

                    {otpSent && (
                      <div className="bg-[#7FCCC4] text-[#002F42] rounded-full py-2 px-4 text-xs font-semibold text-center animate-fadeIn">
                        {t('sent', { n: num })}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        jumpToStage(2);
                        handleUserAction();
                      }}
                      className="w-full py-3.5 rounded-full bg-[#7FCCC4] text-[#002F42] font-semibold text-sm transition-transform active:scale-95 shadow-lg"
                    >
                      {t('ct')} →
                    </button>
                    <p className="text-[11px] text-[#9EC5DD] text-center m-0">
                      {t('as')}
                    </p>
                  </div>
                </div>
              )}

              {/* STAGES 2-6: DASHBOARD SCREENS (from Heal Queue.html) */}
              {['home', 'book', 'rx', 'rep', 'pay'].includes(currentStage.id) && (
                <div className="flex-1 flex flex-col overflow-hidden animate-fadeIn">
                  
                  {/* Dashboard Header Bar */}
                  <div className="flex items-center justify-between px-5 pt-8 pb-3 border-b border-white/10">
                    <b className="font-semibold text-sm text-[#DCEBF4] truncate">
                      {currentStage.id === 'home' ? t('hi') : 'Heal Queue'}
                    </b>

                    <div className="flex items-center gap-1 bg-white/[0.12] rounded-full p-1 border border-white/10">
                      {SHORT_LANG.map((lCode, idx) => (
                        <button
                          key={lCode}
                          type="button"
                          onClick={() => {
                            setLang(idx);
                            handleUserAction();
                          }}
                          className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                            lang === idx ? 'bg-[#7FCCC4] text-[#002F42]' : 'text-white/80 hover:text-white'
                          }`}
                        >
                          {lCode}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setIsBigText(!isBigText);
                          handleUserAction();
                        }}
                        className={`px-1.5 py-0.5 rounded-full text-[11px] transition-all ${
                          isBigText ? 'bg-[#7FCCC4] text-[#002F42]' : 'text-white/80'
                        }`}
                      >
                        Aa
                      </button>
                    </div>
                  </div>

                  {/* Scrollable Dashboard Body */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
                    
                    {/* Back Button if in sub-screen */}
                    {currentStage.id !== 'home' && (
                      <button
                        type="button"
                        onClick={() => {
                          jumpToStage(2); // return to home
                          handleUserAction();
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.12] text-xs font-medium text-white hover:bg-white/20 transition-colors"
                      >
                        ← {t('back')}
                      </button>
                    )}

                    {/* VIEW: HOME (Live Queue) */}
                    {currentStage.id === 'home' && (
                      <div className="space-y-4">
                        {/* Queue Circular Indicator */}
                        <div className="relative w-44 h-44 mx-auto my-2">
                          <svg viewBox="0 0 210 210" className="w-full h-full -rotate-90">
                            <circle
                              cx="105"
                              cy="105"
                              r="94"
                              fill="none"
                              stroke="#ffffff26"
                              strokeWidth="13"
                              strokeLinecap="round"
                            />
                            <circle
                              cx="105"
                              cy="105"
                              r="94"
                              fill="none"
                              stroke="#7FCCC4"
                              strokeWidth="13"
                              strokeLinecap="round"
                              className="transition-all duration-700 ease-out"
                              style={{
                                strokeDasharray: ringCircumference,
                                strokeDashoffset: (ringCircumference * ahead) / maxQueueCapacity
                              }}
                            />
                          </svg>

                          <div className="absolute inset-0 grid place-content-center text-center">
                            {ahead > 0 ? (
                              <>
                                <b className="text-5xl font-semibold leading-none">{ahead}</b>
                                <span className="text-xs text-[#9EC5DD] mt-1">{t('ahd')}</span>
                                <span className="text-[11px] text-[#9EC5DD]">
                                  {t('mn', { m: ahead * 4 })}
                                </span>
                              </>
                            ) : (
                              <b className="text-3xl font-semibold text-[#7FCCC4]">{t('go')}</b>
                            )}
                          </div>
                        </div>

                        {/* Patient Status Guidance Bubble */}
                        <div className="p-3.5 rounded-[18px] bg-white/[0.11] border border-white/10 text-xs sm:text-sm text-[#DCEBF4] leading-relaxed">
                          {sayQueueMessage()}
                        </div>

                        {/* Check-In and Help Action Row */}
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsCheckedIn(true);
                              handleUserAction();
                            }}
                            className={`flex-1 py-2.5 px-3 rounded-full text-xs font-semibold transition-all ${
                              isCheckedIn
                                ? 'bg-white/20 text-[#DCEBF4]'
                                : 'bg-[#7FCCC4] text-[#002F42] hover:bg-[#9EC5DD]'
                            }`}
                          >
                            {isCheckedIn ? '✓ ' + t('ci') : t('here')}
                          </button>
                          <button
                            type="button"
                            onClick={handleUserAction}
                            className="flex-1 py-2.5 px-3 rounded-full border border-white/40 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                          >
                            {t('help')}
                          </button>
                        </div>

                        {/* Interactive Feature Tiles (6 options) */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => {
                              jumpToStage(3); // book
                              handleUserAction();
                            }}
                            className="p-3 rounded-2xl bg-[#9EC5DD] text-[#002F42] text-left flex flex-col justify-between min-h-[76px] transition-transform active:scale-95 shadow"
                          >
                            <span className="text-xl">📅</span>
                            <span className="font-semibold text-xs">{t('bkS')}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              jumpToStage(4); // rx
                              handleUserAction();
                            }}
                            className="p-3 rounded-2xl bg-white/[0.12] text-white text-left flex flex-col justify-between min-h-[76px] hover:bg-white/20 transition-all active:scale-95 border border-white/5"
                          >
                            <span className="text-xl">💊</span>
                            <span className="font-semibold text-xs">{t('rxS')}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              jumpToStage(5); // rep
                              handleUserAction();
                            }}
                            className="p-3 rounded-2xl bg-white/[0.12] text-white text-left flex flex-col justify-between min-h-[76px] hover:bg-white/20 transition-all active:scale-95 border border-white/5"
                          >
                            <span className="text-xl">🧪</span>
                            <span className="font-semibold text-xs">{t('rpS')}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              jumpToStage(6); // pay
                              handleUserAction();
                            }}
                            className="p-3 rounded-2xl bg-white/[0.12] text-white text-left flex flex-col justify-between min-h-[76px] hover:bg-white/20 transition-all active:scale-95 border border-white/5"
                          >
                            <span className="text-xl">₹</span>
                            <span className="font-semibold text-xs">{t('pay')}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setFeedback((prev) => (prev >= 0 ? -1 : 2));
                              handleUserAction();
                            }}
                            className="p-3 rounded-2xl bg-white/[0.12] text-white text-left flex flex-col justify-between min-h-[76px] hover:bg-white/20 transition-all active:scale-95 border border-white/5"
                          >
                            <span className="text-xl">{feedback >= 0 ? '🙂' : '💬'}</span>
                            <span className="font-semibold text-xs truncate">{feedback >= 0 ? t('th') : t('fb')}</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleUserAction}
                            className="p-3 rounded-2xl bg-white/[0.12] text-white text-left flex flex-col justify-between min-h-[76px] hover:bg-white/20 transition-all active:scale-95 border border-white/5"
                          >
                            <span className="text-xl">📍</span>
                            <span className="font-semibold text-xs">{t('cl')}</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* VIEW: APPOINTMENT BOOKING */}
                    {currentStage.id === 'book' && (
                      <div className="space-y-3">
                        <h2 className="text-lg font-semibold m-0">{t('bk')}</h2>

                        {isBooked ? (
                          <div className="space-y-3">
                            <div className="p-4 rounded-2xl bg-white/[0.12] border border-white/10 space-y-1">
                              <div className="text-2xl font-bold text-white">
                                {DAYS[day]} · {SLOTS[slot]}
                              </div>
                              <p className="text-xs text-[#9EC5DD] m-0">
                                {DOCTORS[dept]} · {D.dps[dept][lang]}
                              </p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.1] text-xs text-[#DCEBF4]">
                              {t('dn')}
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setIsBooked(false);
                                handleUserAction();
                              }}
                              className="w-full py-2 rounded-full border border-white/30 text-xs text-white"
                            >
                              Book Another Slot
                            </button>
                          </div>
                        ) : (
                          <div className="p-4 rounded-2xl bg-white/[0.12] border border-white/10 space-y-3">
                            <div>
                              <b className="block text-xs text-[#DCEBF4] mb-1.5">{t('dp')}</b>
                              <div className="flex flex-wrap gap-1.5">
                                {D.dps.map((dItem: any, i: number) => (
                                  <button
                                    key={i}
                                    type="button"
                                    onClick={() => {
                                      setDept(i);
                                      handleUserAction();
                                    }}
                                    className={`px-3 py-1.5 rounded-full border text-xs transition-all ${
                                      dept === i
                                        ? 'bg-[#9EC5DD] border-[#9EC5DD] text-[#002F42] font-semibold'
                                        : 'border-white/30 text-white'
                                    }`}
                                  >
                                    {dItem[lang]}
                                  </button>
                                ))}
                              </div>
                              <p className="text-[11px] text-[#9EC5DD] mt-1 mb-0">{DOCTORS[dept]}</p>
                            </div>

                            <div>
                              <b className="block text-xs text-[#DCEBF4] mb-1.5">{t('dy')}</b>
                              <div className="flex gap-1.5">
                                {DAYS.map((dName, i) => (
                                  <button
                                    key={dName}
                                    type="button"
                                    onClick={() => {
                                      setDay(i);
                                      handleUserAction();
                                    }}
                                    className={`flex-1 py-1.5 rounded-full border text-xs transition-all ${
                                      day === i
                                        ? 'bg-[#9EC5DD] border-[#9EC5DD] text-[#002F42] font-semibold'
                                        : 'border-white/30 text-white'
                                    }`}
                                  >
                                    {dName}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <b className="block text-xs text-[#DCEBF4] mb-1.5">{t('tm')}</b>
                              <div className="flex gap-1.5">
                                {SLOTS.map((sTime, i) => (
                                  <button
                                    key={sTime}
                                    type="button"
                                    onClick={() => {
                                      setSlot(i);
                                      handleUserAction();
                                    }}
                                    className={`flex-1 py-1.5 rounded-full border text-xs transition-all ${
                                      slot === i
                                        ? 'bg-[#9EC5DD] border-[#9EC5DD] text-[#002F42] font-semibold'
                                        : 'border-white/30 text-white'
                                    }`}
                                  >
                                    {sTime}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                setIsBooked(true);
                                handleUserAction();
                              }}
                              className="w-full py-2.5 rounded-full bg-[#7FCCC4] text-[#002F42] font-semibold text-xs mt-2"
                            >
                              {t('cf')}
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* VIEW: PRESCRIPTIONS */}
                    {currentStage.id === 'rx' && (
                      <div className="space-y-3">
                        <h2 className="text-lg font-semibold m-0">{t('rxS')}</h2>
                        {MEDS.map((med, i) => (
                          <div key={i} className="p-3.5 rounded-2xl bg-white/[0.12] border border-white/10 space-y-2">
                            <b className="block text-sm text-white">{med[0]}</b>
                            <p className="text-[11px] text-[#9EC5DD] m-0">
                              {t('mo')} · {t('ni')} · {t('af')}
                            </p>
                            <div className="flex items-center justify-between pt-1">
                              <span className="px-2.5 py-0.5 rounded-full bg-[#7FCCC4] text-[#002F42] text-[11px] font-semibold">
                                {t('dl', { n: med[1] })}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...rxRefills];
                                  updated[i] = 1;
                                  setRxRefills(updated);
                                  handleUserAction();
                                }}
                                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                                  rxRefills[i]
                                    ? 'bg-white/20 text-[#DCEBF4]'
                                    : 'border border-white/50 text-white hover:bg-white/10'
                                }`}
                              >
                                {rxRefills[i] ? t('rd') : t('rf')}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* VIEW: DIAGNOSTIC REPORTS */}
                    {currentStage.id === 'rep' && (
                      <div className="space-y-3">
                        <h2 className="text-lg font-semibold m-0">{t('rpS')}</h2>
                        <div className="p-3.5 rounded-2xl bg-white/[0.12] border border-white/10 space-y-2.5">
                          {[
                            ['Blood test', 1],
                            ['X-ray', 0],
                            ['ECG', 1]
                          ].map(([repName, isReady], i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between pb-2 border-b border-white/10 last:border-0 last:pb-0"
                            >
                              <b className="text-xs text-white">{repName}</b>
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                  isReady ? 'bg-[#7FCCC4] text-[#002F42]' : 'bg-white/20 text-white'
                                }`}
                              >
                                {isReady ? t('ry') : t('pr')}
                              </span>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={handleUserAction}
                          className="w-full py-2.5 rounded-full bg-[#7FCCC4] text-[#002F42] font-semibold text-xs"
                        >
                          {t('sh')}
                        </button>
                      </div>
                    )}

                    {/* VIEW: PAYMENT */}
                    {currentStage.id === 'pay' && (
                      <div className="space-y-3">
                        <h2 className="text-lg font-semibold m-0">{t('pay')}</h2>
                        <div className="p-4 rounded-2xl bg-white/[0.12] border border-white/10 space-y-2">
                          <span className="text-xs text-[#9EC5DD]">{t('due')}</span>
                          <div className="text-3xl font-bold text-white">₹1,700</div>
                          <div className="space-y-1.5 pt-1 text-xs border-t border-white/10">
                            <div className="flex justify-between text-[#DCEBF4]">
                              <span>{t('co')}</span>
                              <b>₹500</b>
                            </div>
                            <div className="flex justify-between text-[#DCEBF4]">
                              <span>{t('lb')}</span>
                              <b>₹1,200</b>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 pt-1">
                          <button
                            type="button"
                            onClick={handleUserAction}
                            className="w-full py-2.5 rounded-full bg-[#7FCCC4] text-[#002F42] font-semibold text-xs"
                          >
                            {t('upi')}
                          </button>
                          <button
                            type="button"
                            onClick={handleUserAction}
                            className="w-full py-2.5 rounded-full border border-white/40 text-white text-xs"
                          >
                            {t('cs')}
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Under-Device Verification & Source Prototype Links */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#8E8278]">
            <a
              href="/projects/healing-the-wait/Opening Heal Queue(1).html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#262320] bg-[#141211] text-[#C8BFB2] hover:text-[#7FCCC4] hover:border-[#7FCCC4]/50 transition-colors cursor-pointer"
            >
              <span>Opening Prototype HTML</span>
              <ExternalLink className="w-3 h-3 text-[#7FCCC4]" />
            </a>
            <a
              href="/projects/healing-the-wait/Heal Queue(1).html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#262320] bg-[#141211] text-[#C8BFB2] hover:text-[#7FCCC4] hover:border-[#7FCCC4]/50 transition-colors cursor-pointer"
            >
              <span>Dashboard Prototype HTML</span>
              <ExternalLink className="w-3 h-3 text-[#7FCCC4]" />
            </a>
          </div>

        </div>

        {/* Right Column (5 cols): The Two Authentic Booklet Photographs */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold block">
              RESEARCH ARTIFACTS · PHYSICAL PUBLICATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-tight">
              The Space Between Publication
            </h3>
            <p className="text-xs sm:text-sm text-[#8E8278] font-sans font-light leading-relaxed">
              Photographic documentation of the published design inquiry, examining outpatient waiting room psychology,
              spatial dynamics, and patient anxiety blueprints.
            </p>
          </div>

          {/* Booklet Image 01: Cover / Inquiry */}
          <div className="group/card relative rounded-2xl border border-[#262320] bg-[#141211] p-3 shadow-xl transition-all duration-300 hover:border-[#722F37]/60">
            <div
              className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() => setZoomedImage('/images/projects/healing-the-wait/image_686dd433.jpg')}
            >
              <img
                src="/images/projects/healing-the-wait/image_686dd433.jpg"
                alt="The Space Between — Editorial Publication Cover & Research Inquiry"
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover/card:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8]">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Click to Zoom
                </span>
              </div>
            </div>

            <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-[#8E8278]">
              <span className="text-[#C8BFB2]">Plate 01 · Publication Book Cover</span>
              <span className="text-[#722F37]">RESEARCH ESSAY</span>
            </div>
          </div>

          {/* Booklet Image 02: Inside Spread */}
          <div className="group/card relative rounded-2xl border border-[#262320] bg-[#141211] p-3 shadow-xl transition-all duration-300 hover:border-[#722F37]/60">
            <div
              className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() => setZoomedImage('/images/projects/healing-the-wait/image_e8de4b98.jpg')}
            >
              <img
                src="/images/projects/healing-the-wait/image_e8de4b98.jpg"
                alt="The Space Between — Service Blueprint & Patient Journey Mapping Spread"
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover/card:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8]">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Click to Zoom
                </span>
              </div>
            </div>

            <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-[#8E8278]">
              <span className="text-[#C8BFB2]">Plate 02 · Patient Journey &amp; Service Mapping</span>
              <span className="text-[#722F37]">SYSTEM BLUEPRINT</span>
            </div>
          </div>

        </div>

      </div>

      {/* 3. SUPPORTING NARRATIVE SECTIONS (Following Portfolio Structure) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-[#262320]">
        
        {/* Pillar 01 */}
        <div className="p-6 rounded-2xl border border-[#262320] bg-[#141211]/60 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#722F37]">01 /</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8278]">
              FIELD RESEARCH
            </span>
          </div>
          <h4 className="font-serif text-xl text-[#F4F0E8] font-normal">
            Outpatient Waiting Psychology
          </h4>
          <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
            Conducted hospital field observations and patient interviews to uncover the root causes of anxiety. The primary
            driver was not delay duration, but informational opacity—not knowing where one stands in the queue.
          </p>
        </div>

        {/* Pillar 02 */}
        <div className="p-6 rounded-2xl border border-[#262320] bg-[#141211]/60 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#722F37]">02 /</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8278]">
              SERVICE BLUEPRINT
            </span>
          </div>
          <h4 className="font-serif text-xl text-[#F4F0E8] font-normal">
            Predictive Triage System
          </h4>
          <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
            Heal Queue maps real-time doctor consultation pace, providing patients with live queue positions, estimated wait
            times, and calming staged guidance as their turn nears.
          </p>
        </div>

        {/* Pillar 03 */}
        <div className="p-6 rounded-2xl border border-[#262320] bg-[#141211]/60 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#722F37]">03 /</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8278]">
              INCLUSIVE ACCESSIBILITY
            </span>
          </div>
          <h4 className="font-serif text-xl text-[#F4F0E8] font-normal">
            Trilingual Accessibility
          </h4>
          <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
            Built from the ground up for high demographic accessibility with native English, Hindi, and Kannada support,
            scalable typography, low-bandwidth optimization, and printed-token reception parity.
          </p>
        </div>

      </div>

      {/* Modal Lightbox for Zoomed Booklet Photographs */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer animate-fadeIn"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20">
            <img
              src={zoomedImage}
              alt="Zoomed Booklet Photograph"
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </article>
  );
};
