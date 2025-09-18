/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        success: "#F59E0B",
        error: "#EF4444",
        surface: "#ffffff",
        text: "#111827",
        ocean: {
          bg: "#f9fafb"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      },
      boxShadow: {
        "soft": "0 10px 30px rgba(37, 99, 235, 0.08)",
        "neon": "0 0 15px rgba(245, 158, 11, 0.5)",
        "neon-blue": "0 0 18px rgba(37, 99, 235, 0.45)"
      },
      backgroundImage: {
        "ocean-gradient": "linear-gradient(180deg, rgba(59,130,246,0.10) 0%, rgba(249,250,251,1) 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(245,158,11,0.3)" },
          "50%": { boxShadow: "0 0 25px rgba(245,158,11,0.6)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite"
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px"
      }
    }
  },
  plugins: []
};
