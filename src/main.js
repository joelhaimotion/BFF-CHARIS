import * as THREE from 'three'
import { gsap } from 'gsap'
import './style.css'

// ==========================================
// THREE.JS SCENE INITIALIZATION
// ==========================================

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.z = 6

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.domElement.classList.add('three-background')
document.body.appendChild(renderer.domElement)

// Lighting
const ambientLight = new THREE.AmbientLight(0xfff0f5, 1.6)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xff758f, 3, 25)
pointLight.position.set(5, 5, 5)
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xffb3c6, 2, 25)
pointLight2.position.set(-5, -4, 4)
scene.add(pointLight2)

// Main 3D Icosahedron (Metallic Rose Gold & Pink)
const geometry = new THREE.IcosahedronGeometry(1.2, 2)
const material = new THREE.MeshStandardMaterial({
  color: 0xff8fab,
  roughness: 0.18,
  metalness: 0.85,
  wireframe: false
})
const object3D = new THREE.Mesh(geometry, material)
object3D.position.set(2.8, 0, 0)
scene.add(object3D)

// Outer Wireframe Cage (Soft Glowing Pastel Pink)
const wireGeometry = new THREE.IcosahedronGeometry(1.32, 2)
const wireMaterial = new THREE.MeshBasicMaterial({
  color: 0xffccd5,
  wireframe: true,
  transparent: true,
  opacity: 0.35
})
const wire = new THREE.Mesh(wireGeometry, wireMaterial)
wire.position.copy(object3D.position)
scene.add(wire)

// Starfield Particles (Shimmering Rose-Pink Star Dust)
const particleCount = 2200
const positions = new Float32Array(particleCount * 3)
for (let i = 0; i < particleCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 25
}
const particleGeometry = new THREE.BufferGeometry()
particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

const particleMaterial = new THREE.PointsMaterial({
  color: 0xffc2d1,
  size: 0.026,
  transparent: true,
  opacity: 0.85
})
const particles = new THREE.Points(particleGeometry, particleMaterial)
scene.add(particles)

// Mouse Parallax Interaction
let mouseX = 0
let mouseY = 0
window.addEventListener('mousemove', (event) => {
  mouseX = event.clientX / window.innerWidth - 0.5
  mouseY = event.clientY / window.innerHeight - 0.5
})

// ==========================================
// HTML TEMPLATE (ALL 8 CHAPTERS)
// ==========================================

document.querySelector('#app').innerHTML = `
  <!-- BACKGROUND AUDIO -->
  <audio id="backgroundMusic" loop preload="auto">
    <source src="/music/you.mp3" type="audio/mpeg">
  </audio>

  <!-- CHAPTER 01: HERO / OPENING -->
  <main class="hero" id="chapter-0">
    <div class="hero-content">
      <p class="subtitle">A little something for you...</p>
      <h1>Hai, My BFF.</h1>
      <p class="description">
        I made a little universe out of our memories, jokes, and everything in between.
        Put on your earphones for the best experience.
      </p>
      <button id="startButton">
        Enter Our Universe ✨
      </button>
    </div>
  </main>

  <!-- CHAPTER 02: OUR BEGINNING (LEBIH RAMAI) -->
  <section class="chapter-section memory-section" id="chapter-1">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 02 • Our Beginning</span>
      <h2>First Impression</h2>
      <p class="chapter-desc">
        Every friendship has a beginning. Ours started with random conversations, unexpected laughs, and a girl whose energy could turn an ordinary moment into something unforgettable.
      </p>

      <div class="quote-highlight-pill">
        ✦ "Who knew that a random girl with endless stories would become one of my favorite people?
" ✦
      </div>

      <div class="cosmic-cards-grid">
        <div class="cosmic-card">
          <span class="cosmic-card-icon">🌱</span>
          <div class="cosmic-card-title">SI PALING CERIA & RANDOM</div>
          <p class="cosmic-card-desc">Penuh cerita, tingkah random, dan energi yang bikin suasana jadi lebih hidup. Selalu punya cara untuk membuat momen sederhana terasa lebih seru dan penuh tawa.</p>
        </div>
        <div class="cosmic-card">
          <span class="cosmic-card-icon">⚡</span>
          <div class="cosmic-card-title">ENERGIC BANGET KALAU KATA GW</div>
          <p class="cosmic-card-desc">Mudah akrab dengan orang baru, senang bertemu teman, dan selalu punya cerita untuk dibagikan. Di balik segala kerandoman dan kecerewetannya, ada pribadi yang hangat dan menyenangkan.</p>
        </div>
        <div class="cosmic-card">
          <span class="cosmic-card-icon">🌌</span>
          <div class="cosmic-card-title">KUAT, TAPI TETAP MANUSIAWI</div>
          <p class="cosmic-card-desc">Di balik senyum dan keceriaannya, ada seseorang yang juga bisa lelah dan butuh tempat untuk bercerita. Tetap berusaha, belajar menerima keadaan, dan mengandalkan Tuhan dalam setiap langkahnya.</p>
        </div>
      </div>

      <button id="toChapter3Btn">
        Remember Our First Chat? →
      </button>
    </div>
  </section>

  <!-- CHAPTER 03: OUR FIRST CHAT THROWBACK -->
  <section class="chapter-section" id="chapter-2">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 03 • The Archive</span>
      <h2>Sudah 4 Bulan sejak saat itu...</h2>
      <p class="chapter-desc">
        "wahai anomali karis" hahahaha jujur emang aga akward sii tiba tiba manggil anomali but ini pertama kalinya gw chat lu untuk confirm ke perpusnas bareng trio last year, always memorable bagi gw
      </p>

      <div class="chat-polaroid-frame">
        <div class="tape-sticker">Archive • Day 01</div>
        <div class="chat-photo-wrapper">
          <img
            src="/images/first-chat.jpeg"
            alt="Our First WhatsApp conversation"
            class="chat-photo"
          >
        </div>
        <p class="chat-polaroid-caption">
          "Semuanya bermula dari sini. ♡"
        </p>
      </div>

      <button id="toChapter4Btn">
        Explore Our Memories →
      </button>
    </div>
  </section>

  <!-- CHAPTER 04: LITTLE MOMENTS GALLERY -->
  <section class="chapter-section" id="chapter-3">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 04 • Little Moments</span>
      <h2>Our Little Memories</h2>
      <p class="chapter-desc">
        Not just photos, but moments frozen in time. Flip through some of our favorite memories.
      </p>

      <div class="moments-slider-container">
        <div class="polaroid-card" id="polaroidCard">
          <div class="polaroid-meta">
            <span id="memoryTag">MEMORY NO. 01</span>
            <span id="memoryDate">Midnight Hangout</span>
          </div>
          <div class="polaroid-img-wrap">
            <img id="memoryImg" src="/images/1.jpeg" alt="Memory photo" class="polaroid-img">
          </div>
          <div class="polaroid-title" id="memoryTitle">The Cozy Midnight Cafe</div>
          <div class="polaroid-story" id="memoryStory">
            "One of those random days where iced coffee and endless laughter healed everything."
          </div>
        </div>

        <div class="gallery-controls">
          <button class="gallery-btn" id="prevMemoryBtn" aria-label="Previous Memory">←</button>
          <div class="gallery-dots" id="galleryDots">
            <div class="gallery-dot active" data-index="0"></div>
            <div class="gallery-dot" data-index="1"></div>
            <div class="gallery-dot" data-index="2"></div>
            <div class="gallery-dot" data-index="3"></div>
          </div>
          <button class="gallery-btn" id="nextMemoryBtn" aria-label="Next Memory">→</button>
        </div>
      </div>

      <button id="toChapter5Btn">
        Listen to Our Soundtrack →
      </button>
    </div>
  </section>

  <!-- CHAPTER 05: OUR SOUNDTRACK ROOM -->
  <section class="chapter-section" id="chapter-4">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 05 • Our Soundtrack</span>
      <h2>Songs That Remind Me of You</h2>
      <p class="chapter-desc">
        Some melodies just feel like you. Here is the soundtrack to our friendship.
      </p>

      <div class="soundtrack-room">
        <!-- VINYL DECK -->
        <div class="vinyl-deck-container">
          <div class="vinyl-disc" id="vinylDisc">
            <div class="vinyl-grooves"></div>
            <div class="vinyl-center-label">
              <span class="vinyl-center-title">YOU</span>
              <span class="vinyl-center-sub">LANY</span>
            </div>
          </div>
        </div>

        <!-- TRACK CARDS -->
        <div class="playlist-grid">
          <div class="track-card active-track" id="trackCard1">
            <div class="track-card-header">
              <div>
                <div class="track-card-title">YOU</div>
                <div class="track-card-artist">LANY</div>
              </div>
              <span class="track-card-badge">♫ Now Playing</span>
            </div>
            <p class="track-card-story">
              "The heartbeat of our universe. Every lyric feels like a quiet reminder of having someone who just gets you."
            </p>
          </div>

          <div class="track-card" id="trackCard2">
            <div class="track-card-header">
              <div>
                <div class="track-card-title">Best Friend</div>
                <div class="track-card-artist">Rex Orange County</div>
              </div>
              <span class="track-card-badge">BFF Anthem</span>
            </div>
            <p class="track-card-story">
              "Because through every high and low, you are the person I can always count on without hesitation."
            </p>
          </div>

          <div class="track-card" id="trackCard3">
            <div class="track-card-header">
              <div>
                <div class="track-card-title">Count on Me</div>
                <div class="track-card-artist">Bruno Mars</div>
              </div>
              <span class="track-card-badge">Promise</span>
            </div>
            <p class="track-card-story">
              "Like 1, 2, 3, I will be there. Distance and busy schedules will never change that."
            </p>
          </div>
        </div>
      </div>

      <button id="toChapter6Btn">
        See What Only We Get →
      </button>
    </div>
  </section>

  <!-- CHAPTER 06: THINGS ONLY WE UNDERSTAND -->
  <section class="chapter-section" id="chapter-5">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 06 • Duo Dynamics</span>
      <h2>Things Only We Understand</h2>
      <p class="chapter-desc">
        Inside jokes, absurd humor, and the chaos that only the two of us truly get.
      </p>

      <div class="quiz-container">
        <!-- QUESTION 1 -->
        <div class="quiz-step active" id="quizStep1">
          <div class="quiz-q-num">Question 01 of 03</div>
          <div class="quiz-question">Siapa yang paling sering tiba-tiba random chat di jam ga jelas?</div>
          <div class="quiz-options">
            <button class="quiz-option-btn" data-choice="A">A. Lu dong, random banget otaknya! 😭</button>
            <button class="quiz-option-btn" data-choice="B">B. Gue sih jelas, no debat.</button>
            <button class="quiz-option-btn" data-choice="C">C. Dua-duanya sama aja, duo chaos! ✨</button>
          </div>
        </div>

        <!-- QUESTION 2 -->
        <div class="quiz-step" id="quizStep2">
          <div class="quiz-q-num">Question 02 of 03</div>
          <div class="quiz-question">Kalau lagi stres sama rutinitas, respon pertama kita apa?</div>
          <div class="quiz-options">
            <button class="quiz-option-btn" data-choice="A">A. Curhat 5 paragraf tanpa titik koma</button>
            <button class="quiz-option-btn" data-choice="B">B. Ngajak jajan es kopi / makan enak</button>
            <button class="quiz-option-btn" data-choice="C">C. Kirim meme absurd sampe lupa masalah</button>
          </div>
        </div>

        <!-- QUESTION 3 -->
        <div class="quiz-step" id="quizStep3">
          <div class="quiz-q-num">Question 03 of 03</div>
          <div class="quiz-question">Definisi persahabatan kita menurut lu apa?</div>
          <div class="quiz-options">
            <button class="quiz-option-btn" data-choice="A">A. Teman gosip & teman overthinking</button>
            <button class="quiz-option-btn" data-choice="B">B. Safe place pas dunia lagi berisik</button>
            <button class="quiz-option-btn" data-choice="C">C. Semua jawaban benar 100%!</button>
          </div>
        </div>

        <!-- RESULT BOX -->
        <div class="quiz-result-box" id="quizResultBox">
          <span class="quiz-result-badge">🏆 Official Friendship Result</span>
          <div class="quiz-result-title">CERTIFIED CHAOS DUO ✨</div>
          <p class="quiz-result-text">
            50% laughter, 30% random energy, and 100% unconditional support. 
            There is literally no one else like you.
          </p>
          <button class="secondary-button" id="retryQuizBtn">↺ Re-test</button>
        </div>
      </div>

      <div class="inside-jokes-pills">
        <span class="joke-pill">💬 Unspoken Rule: Siap dengerin 24/7</span>
        <span class="joke-pill">🍕 Emergency Therapy: Jajan berdua</span>
        <span class="joke-pill">✨ No Filter Mode: Jadi diri sendiri</span>
      </div>

      <button id="toChapter7Btn" style="margin-top: 28px;">
        Read A Special Letter →
      </button>
    </div>
  </section>

  <!-- CHAPTER 07: A LETTER FOR YOU -->
  <section class="chapter-section" id="chapter-6">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 07 • From My Heart</span>
      <h2>A Letter for You</h2>
      <p class="chapter-desc">
        Something I have always wanted to tell you, but maybe never said enough out loud.
      </p>

      <div class="envelope-wrapper">
        <div class="envelope-card" id="envelopeCard">
          <div class="envelope-preview-state" id="envelopePreview">
            <div class="envelope-icon">✉️</div>
            <button class="wax-seal-btn" id="openLetterBtn">
              Open Your Letter ♡
            </button>
          </div>

          <div class="letter-sheet" id="letterSheet">
            <div class="letter-salutation">Hey, bestie. ♡</div>
            <div class="letter-body">
              <p>
                I don't think I say this enough, but I'm truly grateful that I got to know you.
              </p>
              <p>
                Thank you for all the random conversations, the laughs, the weird moments, and even the days when things weren't that easy. Having you around makes everything lighter.
              </p>
              <p>
                I hope life brings you beautiful things, good people, and countless reasons to smile. No matter how busy life gets, I hope we never lose the little things that make our friendship special.
              </p>
              <p>
                I'm always rooting for you, in every single chapter of your life.
              </p>
            </div>
            <div class="letter-closing">
              Your bestie, always & forever. 🤍
            </div>
          </div>
        </div>
      </div>

      <button id="toChapter8Btn">
        One Last Thing... →
      </button>
    </div>
  </section>

  <!-- CHAPTER 08: FINAL CHAPTER -->
  <section class="chapter-section" id="chapter-7">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 08 • To Infinity</span>
      <h2>Our Story Isn't Over Yet</h2>
      <p class="chapter-desc">
        And this isn't the end. It's just another beautiful page in our journey.
      </p>

      <div class="final-universe-card">
        <div class="floating-thumbnails-row">
          <img src="/images/first-chat.jpeg" alt="Chat thumbnail" class="thumb-mini">
          <img src="/images/1.jpeg" alt="Memory 1 thumbnail" class="thumb-mini">
          <img src="/images/4.jpeg" alt="Memory 2 thumbnail" class="thumb-mini">
          <img src="/images/2.jpeg" alt="Memory 3 thumbnail" class="thumb-mini">
          <img src="/images/3.jpeg" alt="Memory 4 thumbnail" class="thumb-mini">
        </div>

        <p class="final-message">
          Thank you for being part of my life.<br>
          Here's to more memories, louder laughs, and a million more random conversations.<br>
          See you in our next chapter, bestie. ♡
        </p>

        <div class="final-signature">
          ✦ Made with love, just for you ✦
        </div>

        <button id="replayButton">
          Replay Our Story ↻
        </button>
      </div>
    </div>
  </section>

  <!-- TRANSITION OVERLAY -->
  <div class="transition" id="transition"></div>

  <!-- FLOATING MUSIC PLAYER -->
  <div class="music-player" id="musicPlayer">
    <button id="musicToggle" aria-label="Play or pause music">
      ♫
    </button>
    <div class="music-info">
      <span class="music-title">YOU</span>
      <span class="music-artist">LANY</span>
    </div>
    <div class="music-bars" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <!-- FLOATING CHAPTER NAVIGATION -->
  <nav class="chapter-navigation" id="chapterNavigation">
    <button id="backButton" class="nav-button">
      ← Back
    </button>
    <span id="chapterCounter">
      CHAPTER 01 / 08
    </span>
    <button id="nextButton" class="nav-button">
      Next →
    </button>
  </nav>
`

// ==========================================
// AUDIO SYSTEM
// ==========================================

const backgroundMusic = document.getElementById('backgroundMusic')
const musicToggle = document.getElementById('musicToggle')
const musicPlayer = document.getElementById('musicPlayer')
const vinylDisc = document.getElementById('vinylDisc')

let musicStarted = false

async function playMusic() {
  try {
    await backgroundMusic.play()
    musicStarted = true
    musicPlayer.classList.add('playing')
    if (vinylDisc) vinylDisc.classList.add('spinning')
  } catch (error) {
    console.warn('Playback prevented by browser policy:', error)
  }
}

function pauseMusic() {
  backgroundMusic.pause()
  musicPlayer.classList.remove('playing')
  if (vinylDisc) vinylDisc.classList.remove('spinning')
}

async function toggleMusic() {
  if (backgroundMusic.paused) {
    await playMusic()
  } else {
    pauseMusic()
  }
}

musicToggle.addEventListener('click', toggleMusic)

// ==========================================
// UNIFIED CHAPTER NAVIGATION STATE MACHINE
// ==========================================

const chapters = [
  document.getElementById('chapter-0'),
  document.getElementById('chapter-1'),
  document.getElementById('chapter-2'),
  document.getElementById('chapter-3'),
  document.getElementById('chapter-4'),
  document.getElementById('chapter-5'),
  document.getElementById('chapter-6'),
  document.getElementById('chapter-7')
]

const chapterCounter = document.getElementById('chapterCounter')
const backButton = document.getElementById('backButton')
const nextButton = document.getElementById('nextButton')
const transition = document.getElementById('transition')

let currentChapter = 0
let isTransitioning = false

// 3D Object choreography per chapter
const chapter3DConfigs = [
  { objX: 2.8, objY: 0, objZ: 0, scale: 1.0, camZ: 6.0 },   // Ch 1 (Hero)
  { objX: 0, objY: 0.2, objZ: -1, scale: 1.3, camZ: 5.5 },  // Ch 2 (Orbit)
  { objX: -3.2, objY: 0, objZ: -2, scale: 1.1, camZ: 5.0 }, // Ch 3 (Chat)
  { objX: 3.2, objY: -0.2, objZ: -2, scale: 1.1, camZ: 5.2 },// Ch 4 (Photos)
  { objX: 0, objY: 2.2, objZ: -3, scale: 1.2, camZ: 5.5 },  // Ch 5 (Soundtrack)
  { objX: -2.8, objY: -1, objZ: -2, scale: 1.0, camZ: 5.0 },// Ch 6 (Quiz)
  { objX: 0, objY: -2.0, objZ: -2.5, scale: 1.1, camZ: 5.2 },// Ch 7 (Letter)
  { objX: 0, objY: 0, objZ: 0, scale: 1.5, camZ: 4.8 }     // Ch 8 (Finale)
]

function updateNavControls() {
  chapterCounter.textContent = `CHAPTER ${String(currentChapter + 1).padStart(2, '0')} / 08`
  backButton.style.visibility = currentChapter === 0 ? 'hidden' : 'visible'
  nextButton.textContent = currentChapter === chapters.length - 1 ? 'Replay ↻' : 'Next →'
}

function resetReplayStates() {
  // 1. Reset Chapter 07 (Envelope & Letter)
  letterOpened = false
  if (envelopePreview) {
    gsap.killTweensOf(envelopePreview)
    envelopePreview.style.display = 'flex'
    envelopePreview.style.opacity = '1'
    envelopePreview.style.transform = 'none'
  }
  if (letterSheet) {
    gsap.killTweensOf(letterSheet)
    letterSheet.style.display = 'none'
    letterSheet.style.opacity = '0'
  }

  // 2. Reset Chapter 06 (Quiz)
  quizCurrentIndex = 0
  quizSteps.forEach(s => s.classList.remove('active'))
  if (quizSteps[0]) quizSteps[0].classList.add('active')
  if (quizResultBox) {
    gsap.killTweensOf(quizResultBox)
    quizResultBox.style.display = 'none'
  }

  // 3. Reset Chapter 04 (Moments Gallery)
  updateMemorySlide(0)

  // 4. Reset Transition overlay
  if (transition) {
    gsap.killTweensOf(transition)
    transition.style.opacity = '0'
  }
}

function goToChapter(targetIndex, customDuration = 0.5) {
  if (isTransitioning || targetIndex === currentChapter) return
  if (targetIndex < 0 || targetIndex >= chapters.length) return

  isTransitioning = true
  const prevChapterEl = chapters[currentChapter]
  const nextChapterEl = chapters[targetIndex]
  const goingForward = targetIndex > currentChapter

  // Update 3D camera and mesh targets
  const cfg = chapter3DConfigs[targetIndex]
  if (cfg) {
    gsap.to(object3D.position, {
      x: cfg.objX,
      y: cfg.objY,
      z: cfg.objZ,
      duration: 1.2,
      ease: 'power2.inOut'
    })
    gsap.to(wire.position, {
      x: cfg.objX,
      y: cfg.objY,
      z: cfg.objZ,
      duration: 1.2,
      ease: 'power2.inOut'
    })
    gsap.to(object3D.scale, {
      x: cfg.scale,
      y: cfg.scale,
      z: cfg.scale,
      duration: 1.2,
      ease: 'power2.inOut'
    })
    gsap.to(wire.scale, {
      x: cfg.scale,
      y: cfg.scale,
      z: cfg.scale,
      duration: 1.2,
      ease: 'power2.inOut'
    })
    gsap.to(camera.position, {
      z: cfg.camZ,
      duration: 1.2,
      ease: 'power2.inOut'
    })
  }

  // Animate Out Previous Chapter
  gsap.to(prevChapterEl, {
    opacity: 0,
    y: goingForward ? -25 : 25,
    duration: customDuration,
    ease: 'power2.in',
    onComplete: () => {
      prevChapterEl.classList.remove('active')
      prevChapterEl.style.display = 'none'

      // Prepare Next Chapter
      currentChapter = targetIndex
      updateNavControls()

      nextChapterEl.style.display = 'flex'
      nextChapterEl.classList.add('active')

      // SPECIAL RESTORATION FOR CHAPTER 01 (HERO / OPENING)
      if (targetIndex === 0) {
        const heroContent = document.querySelector('.hero-content')
        if (heroContent) {
          gsap.killTweensOf(heroContent)
          gsap.set(heroContent, { clearProps: 'all' })
          gsap.fromTo(
            heroContent,
            { opacity: 0, y: -25 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          )
        }
        if (startButton) {
          startButton.disabled = false
        }
        resetReplayStates()
      }

      gsap.fromTo(
        nextChapterEl,
        {
          opacity: 0,
          y: goingForward ? 30 : -30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          onComplete: () => {
            isTransitioning = false
          }
        }
      )
    }
  })
}

// Global Nav Buttons
backButton.addEventListener('click', () => {
  if (currentChapter > 0) {
    goToChapter(currentChapter - 1)
  }
})

nextButton.addEventListener('click', () => {
  if (currentChapter < chapters.length - 1) {
    goToChapter(currentChapter + 1)
  } else {
    // Replay flow: reset back to opening
    goToChapter(0)
  }
})

// Initialize nav controls
updateNavControls()

// ==========================================
// SCENE 1: ENTER BUTTON WITH CINEMATIC ZOOM
// ==========================================

const startButton = document.getElementById('startButton')

startButton.addEventListener('click', async () => {
  if (isTransitioning) return
  isTransitioning = true
  startButton.disabled = true

  // 1. Start music immediately on interaction
  await playMusic()

  // 2. Opening text disappears
  gsap.to('.hero-content', {
    opacity: 0,
    y: -50,
    duration: 0.7,
    ease: 'power2.in'
  })

  // 3. 3D object centers, scales up, camera rushes in
  gsap.to(object3D.position, { x: 0, duration: 1.3, ease: 'power3.inOut' })
  gsap.to(wire.position, { x: 0, duration: 1.3, ease: 'power3.inOut' })
  gsap.to(object3D.scale, { x: 2.8, y: 2.8, z: 2.8, duration: 1.4, ease: 'power3.in' })
  gsap.to(wire.scale, { x: 2.8, y: 2.8, z: 2.8, duration: 1.4, ease: 'power3.in' })
  gsap.to(camera.position, { z: 2.8, duration: 1.4, ease: 'power3.in' })

  // 4. Black flash transition
  gsap.to(transition, {
    opacity: 1,
    duration: 0.7,
    delay: 0.9,
    ease: 'power2.inOut',
    onComplete: () => {
      // Hide hero
      chapters[0].classList.remove('active')
      chapters[0].style.display = 'none'

      // Clean up hero-content so it is fresh and immediately visible whenever returning
      const heroContent = document.querySelector('.hero-content')
      if (heroContent) {
        gsap.killTweensOf(heroContent)
        gsap.set(heroContent, { clearProps: 'all', opacity: 1, y: 0 })
      }
      startButton.disabled = false

      // Show Chapter 02 (Our Beginning)
      currentChapter = 1
      updateNavControls()

      // Reset 3D object to Chapter 02 coordinates
      const cfg = chapter3DConfigs[1]
      object3D.position.set(cfg.objX, cfg.objY, cfg.objZ)
      wire.position.set(cfg.objX, cfg.objY, cfg.objZ)
      object3D.scale.set(cfg.scale, cfg.scale, cfg.scale)
      wire.scale.set(cfg.scale, cfg.scale, cfg.scale)
      camera.position.z = cfg.camZ

      chapters[1].style.display = 'flex'
      chapters[1].classList.add('active')

      gsap.to(transition, {
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out'
      })

      gsap.fromTo(
        chapters[1],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          onComplete: () => {
            isTransitioning = false
          }
        }
      )
    }
  })
})

// In-chapter CTA buttons
document.getElementById('toChapter3Btn').addEventListener('click', () => goToChapter(2))
document.getElementById('toChapter4Btn').addEventListener('click', () => goToChapter(3))
document.getElementById('toChapter5Btn').addEventListener('click', () => goToChapter(4))
document.getElementById('toChapter6Btn').addEventListener('click', () => goToChapter(5))
document.getElementById('toChapter7Btn').addEventListener('click', () => goToChapter(6))
document.getElementById('toChapter8Btn').addEventListener('click', () => goToChapter(7))
document.getElementById('replayButton').addEventListener('click', () => goToChapter(0))

// ==========================================
// CHAPTER 04: LITTLE MOMENTS SLIDESHOW
// ==========================================

const memories = [
  {
    tag: 'MEMORY NO. 01',
    date: 'Midnight Hangout',
    title: 'The Cozy Midnight Cafe',
    story: '"One of those random days where iced coffee and endless laughter healed everything."',
    img: '/images/1.jpeg'
  },
  {
    tag: 'MEMORY NO. 02',
    date: 'Chasing Sunsets',
    title: 'Golden Hour on the Overlook',
    story: '"Standing at the edge of the world, knowing I have got the best person right beside me."',
    img: '/images/4.jpeg'
  },
  {
    tag: 'MEMORY NO. 03',
    date: 'Certified Chaos',
    title: 'Why Are We Even Like This? 😭',
    story: '"The world was not ready for our energy. Spontaneous laughter that never gets old."',
    img: '/images/2.jpeg'
  },
  {
    tag: 'MEMORY NO. 04',
    date: 'Under The Night Sky',
    title: 'Sparks & Constellations',
    story: '"Under a sky full of stars, making quiet wishes that our friendship stays this bright forever."',
    img: '/images/3.jpeg'
  }
]

let activeMemoryIndex = 0
const polaroidCard = document.getElementById('polaroidCard')
const memoryTag = document.getElementById('memoryTag')
const memoryDate = document.getElementById('memoryDate')
const memoryImg = document.getElementById('memoryImg')
const memoryTitle = document.getElementById('memoryTitle')
const memoryStory = document.getElementById('memoryStory')
const galleryDots = document.querySelectorAll('.gallery-dot')

function updateMemorySlide(index) {
  if (index < 0) index = memories.length - 1
  if (index >= memories.length) index = 0
  activeMemoryIndex = index

  gsap.to(polaroidCard, {
    scale: 0.95,
    opacity: 0.6,
    duration: 0.25,
    onComplete: () => {
      const mem = memories[activeMemoryIndex]
      memoryTag.textContent = mem.tag
      memoryDate.textContent = mem.date
      memoryImg.src = mem.img
      memoryTitle.textContent = mem.title
      memoryStory.textContent = mem.story

      galleryDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeMemoryIndex)
      })

      gsap.to(polaroidCard, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out'
      })
    }
  })
}

document.getElementById('prevMemoryBtn').addEventListener('click', () => {
  updateMemorySlide(activeMemoryIndex - 1)
})
document.getElementById('nextMemoryBtn').addEventListener('click', () => {
  updateMemorySlide(activeMemoryIndex + 1)
})
galleryDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.getAttribute('data-index'), 10)
    updateMemorySlide(idx)
  })
})

// ==========================================
// CHAPTER 05: VINYL & PLAYLIST INTERACTION
// ==========================================

const trackCards = [
  document.getElementById('trackCard1'),
  document.getElementById('trackCard2'),
  document.getElementById('trackCard3')
]

trackCards.forEach((card, index) => {
  card.addEventListener('click', async () => {
    trackCards.forEach(c => c.classList.remove('active-track'))
    card.classList.add('active-track')

    if (index === 0) {
      // Toggle YOU - LANY audio
      await toggleMusic()
    } else {
      // Gentle feedback
      gsap.fromTo(card, { scale: 0.98 }, { scale: 1, duration: 0.3 })
    }
  })
})

if (vinylDisc) {
  vinylDisc.addEventListener('click', toggleMusic)
}

// ==========================================
// CHAPTER 06: CHAOS DUO QUIZ
// ==========================================

const quizSteps = [
  document.getElementById('quizStep1'),
  document.getElementById('quizStep2'),
  document.getElementById('quizStep3')
]
const quizResultBox = document.getElementById('quizResultBox')
let quizCurrentIndex = 0

document.querySelectorAll('.quiz-option-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (quizCurrentIndex < quizSteps.length - 1) {
      quizSteps[quizCurrentIndex].classList.remove('active')
      quizCurrentIndex++
      quizSteps[quizCurrentIndex].classList.add('active')
    } else {
      quizSteps[quizCurrentIndex].classList.remove('active')
      quizResultBox.style.display = 'block'
      gsap.fromTo(quizResultBox, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
    }
  })
})

document.getElementById('retryQuizBtn').addEventListener('click', () => {
  quizResultBox.style.display = 'none'
  quizSteps.forEach(s => s.classList.remove('active'))
  quizCurrentIndex = 0
  quizSteps[0].classList.add('active')
})

// ==========================================
// CHAPTER 07: ENVELOPE & LETTER ANIMATION
// ==========================================

const envelopeCard = document.getElementById('envelopeCard')
const openLetterBtn = document.getElementById('openLetterBtn')
const envelopePreview = document.getElementById('envelopePreview')
const letterSheet = document.getElementById('letterSheet')
let letterOpened = false

function openLetter() {
  if (letterOpened) return
  letterOpened = true

  gsap.to(envelopePreview, {
    opacity: 0,
    scale: 0.8,
    duration: 0.4,
    onComplete: () => {
      envelopePreview.style.display = 'none'
      letterSheet.style.display = 'block'

      gsap.fromTo(
        letterSheet,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
      )
    }
  })
}

openLetterBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  openLetter()
})
envelopeCard.addEventListener('click', openLetter)

// ==========================================
// THREE.JS RENDER LOOP & RESIZE
// ==========================================

function animate() {
  requestAnimationFrame(animate)

  // Subtle continuous rotation
  object3D.rotation.x += 0.003
  object3D.rotation.y += 0.005

  wire.rotation.x -= 0.002
  wire.rotation.y -= 0.003

  particles.rotation.y += 0.0004

  // Mouse Parallax reaction
  object3D.rotation.x += mouseY * 0.0006
  object3D.rotation.y += mouseX * 0.0006

  renderer.render(scene, camera)
}
animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})