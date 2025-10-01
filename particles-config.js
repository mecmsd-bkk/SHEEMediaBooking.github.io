tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#f0f2f5"
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#3498db"
    },
    links: {
      color: "#3498db",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 50
    },
    opacity: {
      value: 0.8
    },
    // --- ส่วนที่อัปเดต ---
    shape: {
      type: "char",
      options: {
        char: {
          // เพิ่มอีโมจิเกี่ยวกับการเรียนเข้าไปในชุดเดิม
          value: ["➕", "❤️", "⚕️", "🧬", "🩺", "📚", "🎓", "💡", "🔬"], // <<< แก้ไขบรรทัดนี้
          fill: true,
          font: "Arial",
          weight: "500"
        }
      }
    },
    size: {
      value: 16
    }
  },
  detectRetina: true
});