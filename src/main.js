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
      <h2>Little Moments, Big Memories</h2>
      <p class="chapter-desc">
        Dari obrolan random sampai momen yang bikin ketawa tanpa alasan. Mungkin terlihat sederhana, tapi justru hal-hal kecil seperti inilah yang membuat persahabatan kita begitu berarti.
      </p>

      <div class="moments-slider-container">
        <div class="polaroid-card" id="polaroidCard">
          <div class="polaroid-meta">
            <span id="memoryTag">MEMORY NO. 01</span>
            <span id="memoryDate">Si Paling Bali</span>
          </div>
          <div class="polaroid-img-wrap">
            <img id="memoryImg" src="/images/1.jpeg" alt="Memory photo" class="polaroid-img">
          </div>
          <div class="polaroid-title" id="memoryTitle">The Picture That Stayed</div>
          <div class="polaroid-story" id="memoryStory">
            "Just a little picture from your Bali trip, but somehow, it became one of my favorite things to keep. Little did you know, this photo would find its way into a playlist I made just for you."
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
        Listen to Our Favorite Songs →
      </button>
    </div>
  </section>

  <!-- CHAPTER 05: OUR SOUNDTRACK ROOM -->
  <section class="chapter-section" id="chapter-4">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 05 • Our Favorite Song</span>
      <h2>Melodies I'll Remember</h2>
      <p class="chapter-desc">
        Some songs remind me of certain moments, and some remind me of you. These are the songs that somehow became a little part of our story, carrying the laughter, the random conversations, and the memories I never want to forget.
      </p>

      <div class="soundtrack-room">
        <!-- SOUNDTRACK HINT PILL -->
        <div class="soundtrack-hint-pill">
          <span class="hint-pulse-dot"></span>
          <span>Click any card below to play music</span>
        </div>

        <!-- VINYL DECK -->
        <div class="vinyl-deck-container">
          <div class="vinyl-disc" id="vinylDisc" role="button" tabindex="0" aria-label="Toggle vinyl playback" title="Click vinyl to play or pause">
            <div class="vinyl-grooves"></div>
            <div class="vinyl-center-label">
              <span class="vinyl-center-title" id="vinylCenterTitle">YOU</span>
              <span class="vinyl-center-sub" id="vinylCenterArtist">LANY</span>
            </div>
          </div>
        </div>

        <!-- TRACK CARDS -->
        <div class="playlist-grid">
          <div class="track-card active-track" id="trackCard1" data-track-index="0" role="button" tabindex="0" aria-label="Play YOU by LANY">
            <div class="track-card-header">
              <div>
                <div class="track-card-title">YOU</div>
                <div class="track-card-artist">LANY</div>
              </div>
              <span class="track-card-badge" id="trackBadge1">♫ Now Playing</span>
            </div>
            <p class="track-card-story">
              "You were the one who introduced me to LANY, and now YOU has a special place in my playlist. Lucu ya, awalnya cuma lagu yang lu kasih tahu ke gw, tapi sekarang malah jadi salah satu lagu yang selalu ngingetin gw sama lu. Maybe you didn't realize it back then, but somehow, you became part of my music taste too. Jadi setiap lagu ini diputar, gw bakal inget kalau orang yang ngenalin gw ke lagu sebagus ini adalah my favorite yapper herself. Thank you for introducing me to something that eventually became special to me, Ris."
            </p>
            <div class="track-card-footer">
              <span class="track-action-btn" id="trackAction1">
                <span class="action-icon">❚❚</span> <span class="action-label">Click to Pause</span>
              </span>
            </div>
          </div>

          <div class="track-card" id="trackCard2" data-track-index="1" role="button" tabindex="0" aria-label="Play Best Part by H.E.R. ft. Daniel Caesar">
            <div class="track-card-header">
              <div>
                <div class="track-card-title">Best Part</div>
                <div class="track-card-artist">H.E.R. ft. Daniel Caesar</div>
              </div>
              <span class="track-card-badge" id="trackBadge2">BFF Anthem</span>
            </div>
            <p class="track-card-story">
              "Okay, this song is literally SO you-coded. Gw tahu banget kalau ini salah satu lagu favorit lu, and honestly, that's what makes it special to me too. Dari melodinya sampai liriknya, somehow lagu ini selalu bikin gw keinget sama lu. Apalagi knowing how much you love this song and how well you know it by heart. Kayaknya kalau ada lagu yang punya Charis energy, this would definitely be one of them. And whenever I hear it, I'll always think of you and your little world of favorite songs."
            </p>
            <div class="track-card-footer">
              <span class="track-action-btn" id="trackAction2">
                <span class="action-icon">▶</span> <span class="action-label">Click to Play</span>
              </span>
            </div>
          </div>

          <div class="track-card" id="trackCard3" data-track-index="2" role="button" tabindex="0" aria-label="Play My Everything by Ariana Grande">
            <div class="track-card-header">
              <div>
                <div class="track-card-title">My Everything</div>
                <div class="track-card-artist">Ariana Grande</div>
              </div>
              <span class="track-card-badge" id="trackBadge3">Promise</span>
            </div>
            <p class="track-card-story">
              "You know what's funny? Kata 'everything' itu punya makna tersendiri buat gw, and somehow, there's a song you love with that exact word in its title. Maybe it's just a coincidence, but I think it's a sweet one. Buat gw, seseorang nggak harus jadi segalanya untuk bisa punya tempat yang spesial dalam hidup kita. Sometimes, it's enough to be that one person who makes ordinary days feel better, listens to all our random stories, and stays through the ups and downs. Dan gw bersyukur karena di antara banyak orang yang gw temui, gw bisa punya sahabat kayak lu. You may not realize it, but you really are an important part of my life, Ris."
            </p>
            <div class="track-card-footer">
              <span class="track-action-btn" id="trackAction3">
                <span class="action-icon">▶</span> <span class="action-label">Click to Play</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <button id="toChapter6Btn">
        See What Only We Get →
      </button>
    </div>
  </section>

  <!-- CHAPTER 06: GETTING TO KNOW YOU -->
  <section class="chapter-section" id="chapter-5">
    <div class="chapter-inner">
      <span class="chapter-label">Chapter 06 • GETTING TO KNOW YOU</span>
      <h2>Beyond the Smiles</h2>
      <p class="chapter-desc">
        Behind every laugh, there's a story. Let's get to know the little things that make you, YOU.
      </p>

      <div class="quiz-container">
        <!-- QUESTION 1 -->
        <div class="quiz-step active" id="quizStep1">
          <div class="quiz-q-num">Question 01 of 03</div>
          <div class="quiz-question">Hal kecil apa yang sebenarnya gampang banget bikin lu happy?</div>
          <div class="quiz-options">
            <button class="quiz-option-btn" data-choice="A">A. Bisa cerita panjang lebar tanpa takut dicuekin. 🗣️</button>
            <button class="quiz-option-btn" data-choice="B">B. Ketemu orang baru, punya teman baru, and making random memories! ✨</button>
            <button class="quiz-option-btn" data-choice="C">C. Hal-hal sederhana yang bikin gw ngerasa loved and appreciated. 💗</button>
          </div>
        </div>

        <!-- QUESTION 2 -->
        <div class="quiz-step" id="quizStep2">
          <div class="quiz-q-num">Question 02 of 03</div>
          <div class="quiz-question">Menurut lu, orang paling sering salah paham tentang diri lu di bagian mana?</div>
          <div class="quiz-options">
            <button class="quiz-option-btn" data-choice="A">A. Mereka pikir gw selalu happy, padahal gw juga gampang capek dan overthinking. 🥹</button>
            <button class="quiz-option-btn" data-choice="B">B. Mereka pikir gw cuma bisa becanda dan random, padahal gw juga punya serious side. 🤨</button>
            <button class="quiz-option-btn" data-choice="C">C. Gw kelihatan kuat dan baik-baik aja, padahal sometimes I just need someone to understand me. 🌷</button>
          </div>
        </div>

        <!-- QUESTION 3 -->
        <div class="quiz-step" id="quizStep3">
          <div class="quiz-q-num">Question 03 of 03</div>
          <div class="quiz-question">Kalau bisa mengulang satu momen dalam hidup, lu bakal pilih momen apa?</div>
          <div class="quiz-options">
            <button class="quiz-option-btn" data-choice="A">A. One of those random days yang bikin gw ketawa sampai lupa sama masalah. 😂</button>
            <button class="quiz-option-btn" data-choice="B">B. Momen ketika gw merasa benar-benar loved, understood, and appreciated. 🫶</button>
            <button class="quiz-option-btn" data-choice="C">C. Salah satu kenangan sederhana yang waktu itu terasa biasa aja, but now I wish I could experience it one more time.</button>
          </div>
        </div>

        <!-- RESULT BOX -->
        <div class="quiz-result-box" id="quizResultBox">
          <span class="quiz-result-badge">💌 Thank You For Sharing</span>
          <div class="quiz-result-title">Makasih Udah Mau Jawab, Ris 🤍</div>
          <p class="quiz-result-text">
            Apapun pilihan jawaban lu, makasih banyak ya udah mau jujur dan berbagi lewat pertanyaan-pertanyaan ini. Senang rasanya bisa mengenal dan memahami hal-hal tentang diri lu lebih jauh. Tetap jadi diri lu yang apa adanya—lu selalu berharga, dan lu selalu punya tempat yang aman untuk cerita kapan pun lu butuh. Thank you for being such a wonderful best friend! 🌷
          </p>
          <button class="secondary-button" id="retryQuizBtn">↺ Jawab Ulang</button>
        </div>
      </div>

      <div class="inside-jokes-pills">
        <span class="joke-pill">💬 Unspoken Rule: Siap dengerin 24/7</span>
        <span class="joke-pill">🍕 Emergency Therapy: Ingat Makan</span>
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
      <span class="chapter-label">Chapter 07 • WORDS I WANT YOU TO KNOW</span>
      <h2>A Few Words, Just for You</h2>
      <p class="chapter-desc">
        No fancy words, no big promises. Just a little piece of my heart and a reminder of how much your friendship means to me..
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
            <div class="letter-salutation">Happy Birthday, Charis! 🌷💗</div>
            <div class="letter-body">
              <p class="letter-highlight">
                HAPPY BIRTHDAY TO MY BFF, CHARIS LAMGANDA SIBARANI!! 🥳🎂💗
              </p>

              <p>
                FINALLY, IT'S YOUR DAYYYY!! HAHAHAHA. Another year older, another year of being the chaotic, talkative, random, and genuinely amazing person that you are. First of all, I hope today brings you so much happiness, because honestly, you deserve so many beautiful things in this life.
              </p>

              <p>
                Jujur, Ris, sometimes gw masih suka mikir how lucky I am to have met you. Dari sekian banyak orang yang bisa gw temuin dalam hidup, somehow Tuhan mempertemukan gw sama lu, and I'm genuinely grateful for that. Gw ga pernah expect bakal punya sahabat cewe yang bisa sefrekuensi ini sama gw, someone I can talk to for hours, listen to endless random stories from, and somehow still look forward to hearing more the next day. 😭 HAHAHAHA.
              </p>

              <p>
                And the funny thing is, I don't think our friendship needs extraordinary moments to feel special. Sometimes it's just our random conversations, our late-night calls, our endless yapping sessions, our silly jokes, or even the most unserious topics that somehow turn into hours of talking. Hal-hal sederhana kayak gitu justru jadi bagian yang paling gw syukuri. Because with you, even an ordinary day can turn into a memory worth keeping.
              </p>

              <p>
                But Ris, there's something I really want you to remember as you grow older.
              </p>

              <p>
                Gw tahu orang-orang mungkin lebih sering lihat lu sebagai Charis yang happy, friendly, rame, gampang akrab sama orang, dan selalu punya cerita buat dibagikan. And honestly, that's one of the things I admire about you. You have this way of making conversations feel alive, making people laugh, and bringing your own kind of energy wherever you go.
              </p>

              <p>
                But I also want you to know that you don't always have to be that version of yourself around me.
              </p>

              <p>
                You don't have to be happy all the time. You don't have to pretend that everything is okay when it's not. You don't have to force yourself to be strong every single day just because people are used to seeing you smile.
              </p>

              <p>
                Kalau suatu hari lu capek, sedih, overthinking, atau bahkan ga tahu kenapa rasanya pengen nangis aja, it's okay, Ris. You don't always have to explain everything perfectly for me to listen. Sometimes, you can just tell me what happened, complain about your day, repeat the same story for the hundredth time, or simply say that you're not okay.
              </p>

              <p>
                And if all you need is someone to listen, then I'll listen. If you need advice, I'll try my best to help. And if you just want to yap about the most random thing ever, WELL, YOU KNOW I'M ALWAYS HERE FOR THAT TOO. 😭 HAHAHAHA.
              </p>

              <p>
                Gw mungkin ga selalu punya jawaban buat semua masalah lu, and I know I can't make every difficult day disappear. But I hope you never feel like you have to face everything alone. You have people who care about you, and I hope you always remember that I'm one of them.
              </p>

              <p>
                On your birthday, I also want to remind you of something more important than anything I could ever give you.
              </p>

              <p>
                Always keep God at the center of your life, Ris. In every season, whether life feels exciting, confusing, exhausting, or completely different from what you expected, I hope you continue to trust Him.
              </p>

              <p>
                I pray that God gives you wisdom in your decisions, strength when things get difficult, peace when your mind feels crowded, and courage when you're afraid of what comes next.
              </p>

              <p>
                Semoga Tuhan selalu menjaga hati lu, menuntun setiap langkah lu, dan mempertemukan lu dengan orang-orang yang tulus menyayangi lu. I hope He reminds you that your worth isn't determined by how many people like you, how well you perform, or how perfectly you handle everything.
              </p>

              <p>
                You are valuable simply because you are you, Ris. And I hope you never forget that.
              </p>

              <p>
                Gw juga berharap di umur yang baru ini, lu bisa semakin mengenal diri lu sendiri, semakin berani mengejar hal-hal yang lu impikan, dan semakin menikmati setiap proses yang Tuhan izinkan terjadi dalam hidup lu. May you grow into someone who is not only happy on the outside, but also genuinely peaceful and happy within.
              </p>

              <p>
                And please, take care of yourself, okay? Makan yang teratur, minum air putih yang banyak, istirahat kalau capek, and don't forget that taking a break doesn't mean you're falling behind. You spend so much time caring about the people around you, so I hope you learn to give yourself that same kindness, too.
              </p>

              <p class="letter-section-divider">
                And about us, my BFF... 🌊💗
              </p>

              <p>
                Thank you for being the person who makes my days a little more interesting, my conversations a little longer, and my life a little more colorful.
              </p>

              <p>
                Thank you for trusting me with your stories, for listening to mine, for being honest with me, and for reminding me that friendship doesn't have to be perfect to be meaningful.
              </p>

              <p>
                Gw seneng karena kita bisa saling cerita, saling support, saling mengingatkan, dan belajar memahami satu sama lain. I know we're both human. We have our own weaknesses, our own busy days, our own moods, and sometimes we might misunderstand each other.
              </p>

              <p>
                But I hope we always remember that we can talk things through. Kalau ada yang bikin ga nyaman, let's communicate. Kalau ada kesalahan, let's learn from it. We don't have to be perfect friends; we just have to be willing to understand and respect each other.
              </p>

              <p>
                And Ris, remember what you told me? That even if we're busy, you hope we never lose contact and that we can still talk like usual?
              </p>

              <p>
                I hope for that, too.
              </p>

              <p>
                Maybe life will get busier. Maybe someday our routines will change, our responsibilities will grow, and we won't always have as much time to talk as we do now. But I hope we never forget the friendship we've built and the memories we've shared.
              </p>

              <p>
                I hope there will always be room for a random "ELLLLLL" in my notifications, another unexpected story from you, another late-night conversation, and another moment where we laugh at something that probably wouldn't even make sense to anyone else. 😭 HAHAHAHA.
              </p>

              <p>
                And don't worry, your yap sessions are safe with me. You can still send me those long stories, random thoughts, unexpected plot twists, and whatever else is happening in that wonderfully chaotic mind of yours.
              </p>

              <p>
                I might not always be able to reply immediately, but that doesn't mean your stories aren't important to me. And I hope you know you can always tell me when something is happening in your life, whether it's something exciting, something ridiculous, or something that's been weighing on your heart.
              </p>

              <p>
                One more thing, Ris. Please keep being yourself.
              </p>

              <p>
                Don't feel like you have to become someone else to fit into a certain circle. Don't compare your journey with someone else's. And don't ever think that you have to be the loudest, funniest, strongest, or most interesting person in the room to be worth knowing.
              </p>

              <p>
                The Charis I know is already someone worth appreciating. Your friendliness, your honesty, your random humor, your willingness to care, and even those little things you might not notice about yourself are part of what makes you special.
              </p>

              <p>
                I'm proud of you, not just for the things you achieve, but also for the things you quietly overcome. For the days you keep going even when you're tired. For the moments you choose to trust God even when you don't understand everything. And for the way you continue to care about other people while figuring out your own life, too.
              </p>

              <p>
                I hope this new chapter brings you closer to the dreams you've been praying for. I hope you meet more people who appreciate your presence, experience moments that make you genuinely happy, and create memories that you'll look back on with the biggest smile.
              </p>

              <p>
                And when life doesn't go according to plan, I hope you remember that one difficult chapter doesn't define your whole story. There's still so much ahead of you, Ris, and I genuinely hope you get to experience all the beautiful things God has prepared for you.
              </p>

              <p>
                So, here's to another year of growing, learning, laughing, making questionable decisions, telling random stories, and collecting memories that we'll probably laugh about for years. HAHAHAHA. 🥳💗
              </p>

              <p>
                Thank you for being my best friend, Charis. Thank you for being the first female best friend I've had who made this friendship feel so natural and special to me. I'm really glad that I met you, and I'm thankful that God allowed our paths to cross.
              </p>

              <p>
                Happy birthday once again, my BFF!
              </p>

              <p>
                May this year be filled with God's goodness, unexpected blessings, genuine happiness, answered prayers, and countless reasons to smile.
              </p>

              <p>
                Keep shining in your own way, keep being the Charis I know, and never forget to take care of yourself along the way.
              </p>

              <p>
                And no matter how much older you get, please don't stop being that random, funny, talkative girl who can turn the most ordinary conversation into something memorable. Because honestly, that wouldn't be very Charis of you, would it? 😭 HAHAHAHA.
              </p>

              <p>
                I pray that God continues to guide you, protect you, and strengthen you in every season of your life.
              </p>

              <p>
                Happy birthday, Charis Lamganda Sibarani. I'm so grateful to call you my BFF.
              </p>

              <p>
                Stay healthy, stay happy, stay close to God, and keep being unapologetically YOU.
              </p>

              <p>
                And remember, whenever life gets a little too much, you don't have to carry everything by yourself, okay?
              </p>

              <p>
                Your BFF is still here. You can always yap to me. HAHAHAHA.
              </p>

              <p>
                Much love for you, Ris. God bless you always. 🌷🌊💗
              </p>
            </div>
            <div class="letter-closing">
              — Elson Parker, your BFF. ♡
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
      <span class="music-title" id="floatingMusicTitle">YOU</span>
      <span class="music-artist" id="floatingMusicArtist">LANY</span>
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
// AUDIO SYSTEM & PLAYLIST CONFIGURATION
// ==========================================

const playlist = [
  {
    id: 0,
    title: 'YOU',
    artist: 'LANY',
    src: '/music/you.mp3',
    cardId: 'trackCard1',
    badgeId: 'trackBadge1',
    actionId: 'trackAction1',
    defaultBadge: 'Cosmic Melody'
  },
  {
    id: 1,
    title: 'Best Part',
    artist: 'H.E.R. ft. Daniel Caesar',
    src: '/music/H.E.R. - Best Part (Lyrics) Ft. Daniel Caesar.mp3',
    cardId: 'trackCard2',
    badgeId: 'trackBadge2',
    actionId: 'trackAction2',
    defaultBadge: 'BFF Anthem'
  },
  {
    id: 2,
    title: 'My Everything',
    artist: 'Ariana Grande',
    src: '/music/Ariana Grande - My Everything (Lyrics).mp3',
    cardId: 'trackCard3',
    badgeId: 'trackBadge3',
    actionId: 'trackAction3',
    defaultBadge: 'Promise'
  }
]

let currentTrackIndex = 0
let musicStarted = false

const backgroundMusic = document.getElementById('backgroundMusic')
const musicToggle = document.getElementById('musicToggle')
const musicPlayer = document.getElementById('musicPlayer')
const vinylDisc = document.getElementById('vinylDisc')

function updateTrackUI() {
  const current = playlist[currentTrackIndex]
  const isPlaying = !backgroundMusic.paused

  // Update Vinyl Disc Center
  const vinylCenterTitle = document.getElementById('vinylCenterTitle')
  const vinylCenterArtist = document.getElementById('vinylCenterArtist')
  if (vinylCenterTitle) vinylCenterTitle.textContent = current.title
  if (vinylCenterArtist) vinylCenterArtist.textContent = current.artist

  // Update Floating Mini Player
  const floatingMusicTitle = document.getElementById('floatingMusicTitle')
  const floatingMusicArtist = document.getElementById('floatingMusicArtist')
  if (floatingMusicTitle) floatingMusicTitle.textContent = current.title
  if (floatingMusicArtist) floatingMusicArtist.textContent = current.artist

  // Update Track Cards styling, badges, and action prompts
  playlist.forEach((track, idx) => {
    const card = document.getElementById(track.cardId)
    const badge = document.getElementById(track.badgeId)
    const actionBtn = document.getElementById(track.actionId)
    if (!card) return

    if (idx === currentTrackIndex) {
      card.classList.add('active-track')
      if (badge) {
        badge.textContent = isPlaying ? '♫ Now Playing' : '❚❚ Paused'
      }
      if (actionBtn) {
        actionBtn.innerHTML = isPlaying
          ? '<span class="action-icon">❚❚</span> <span class="action-label">Click to Pause</span>'
          : '<span class="action-icon">▶</span> <span class="action-label">Click to Resume</span>'
      }
    } else {
      card.classList.remove('active-track')
      if (badge) {
        badge.textContent = track.defaultBadge
      }
      if (actionBtn) {
        actionBtn.innerHTML = '<span class="action-icon">▶</span> <span class="action-label">Click to Play</span>'
      }
    }
  })

  // Equalizer bars & Vinyl animation
  if (isPlaying) {
    if (musicPlayer) musicPlayer.classList.add('playing')
    if (vinylDisc) vinylDisc.classList.add('spinning')
  } else {
    if (musicPlayer) musicPlayer.classList.remove('playing')
    if (vinylDisc) vinylDisc.classList.remove('spinning')
  }
}

async function playMusic() {
  try {
    await backgroundMusic.play()
    musicStarted = true
    updateTrackUI()
  } catch (error) {
    console.warn('Playback prevented by browser policy:', error)
  }
}

function pauseMusic() {
  backgroundMusic.pause()
  updateTrackUI()
}

async function toggleMusic() {
  if (backgroundMusic.paused) {
    await playMusic()
  } else {
    pauseMusic()
  }
}

async function selectTrack(index, autoPlay = true) {
  if (index < 0 || index >= playlist.length) return

  const track = playlist[index]
  const isSameTrack = (currentTrackIndex === index)

  if (isSameTrack) {
    // If clicking currently active track, toggle playback
    await toggleMusic()
    return
  }

  // Switch to selected track
  currentTrackIndex = index
  backgroundMusic.src = encodeURI(track.src)
  backgroundMusic.load()

  if (autoPlay) {
    await playMusic()
  } else {
    updateTrackUI()
  }

  // Visual vinyl feedback
  if (vinylDisc) {
    gsap.fromTo(vinylDisc, { scale: 0.94 }, { scale: 1, duration: 0.4, ease: 'back.out(1.7)' })
  }
}

backgroundMusic.addEventListener('play', () => {
  musicStarted = true
  updateTrackUI()
})

backgroundMusic.addEventListener('pause', () => {
  updateTrackUI()
})

backgroundMusic.addEventListener('ended', () => {
  // Auto loop or advance to next song smoothly
  selectTrack((currentTrackIndex + 1) % playlist.length, true)
})

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
  if (envelopeCard) envelopeCard.classList.remove('letter-opened')
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
    date: 'Si Paling Bali',
    title: 'The Cozy Midnight Cafe',
    story: '"One of those random days where iced coffee and endless laughter healed everything."',
    img: '/images/1.jpeg'
  },
  {
    tag: 'MEMORY NO. 02',
    date: 'HER BALI ERA 🌴',
    title: 'The First One I Got',
    story: '"Your first face picture that you let me keep. Maybe it was just an ordinary selfie for you, but for me, it felt a little more special. And look at you, still enjoying the beach, collecting sunshine, and coming back with that adorable sun-kissed face. HAHAHA, Just kiding."',
    img: '/images/4.jpeg'
  },
  {
    tag: 'MEMORY NO. 03',
    date: 'LITTLE JOY DELIVERY 🚚',
    title: 'One Matcha, One Happy Girl',
    story: '"Sometimes, making someone happy doesnt take much. Just her favorite matcha ice cream, a little visit, and that smile she tried so hard to hide from my camera. HAHAHA. You might have hidden your face, Ris, but I still caught the happiness. And honestly, thats my favorite part."',
    img: '/images/2.jpeg'
  },
  {
    tag: 'MEMORY NO. 04',
    date: 'RAMEN & REMI 🍜',
    title: 'One Night Many Stories',
    story: '"Who knew our first dinner together would turn into ramen, endless stories, matcha ice cream, and a random card game? You brought the PKKMB stories, I brought my post-work exhaustion, and together we somehow made the evening fun. The ramen wasnt finished, the cards were shuffled, and the conversations just kept going. Honestly, we should do this more often. HAHAHA."',
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

playlist.forEach((track, index) => {
  const card = document.getElementById(track.cardId)
  if (card) {
    card.addEventListener('click', async () => {
      // Tactile micro-animation on clicked card
      gsap.fromTo(card, { scale: 0.97 }, { scale: 1, duration: 0.35, ease: 'power2.out' })
      await selectTrack(index, true)
    })

    card.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        await selectTrack(index, true)
      }
    })
  }
})

if (vinylDisc) {
  vinylDisc.addEventListener('click', toggleMusic)
  vinylDisc.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleMusic()
    }
  })
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
  if (envelopeCard) envelopeCard.classList.add('letter-opened')

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