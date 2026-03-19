const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'float': 'float 8s ease-in-out infinite',
                'glow': 'glow 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)' },
                    '50%': { transform: 'translateY(-20px) scale(1.02)' },
                },
                glow: {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '0.8' },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            dark: {
                colors: {
                    background: "#000000",
                    foreground: "#FFFFFF",
                    divider: "rgba(255, 255, 255, 0.1)",
                    focus: "#0071E3",
                    content1: "rgba(255, 255, 255, 0.03)",
                    content2: "rgba(255, 255, 255, 0.05)",
                    content3: "rgba(255, 255, 255, 0.08)",
                    content4: "rgba(255, 255, 255, 0.1)",
                    default: {
                        DEFAULT: "rgba(255, 255, 255, 0.08)",
                        foreground: "#FFFFFF",
                    },
                    primary: {
                        50: "#E5F0FF",
                        100: "#CCE1FF",
                        200: "#99C3FF",
                        300: "#66A5FF",
                        400: "#3387FF",
                        500: "#0071E3",
                        600: "#005AB5",
                        700: "#004387",
                        800: "#002C5A",
                        900: "#00152D",
                        DEFAULT: "#0071E3",
                        foreground: "#FFFFFF",
                    },
                },
                layout: {
                    disabledOpacity: 0.5,
                    radius: {
                        small: "16px",
                        medium: "20px",
                        large: "24px",
                    },
                    borderWidth: {
                        small: "1px",
                        medium: "1.5px",
                        large: "2px",
                    },
                },
            },
        },
    })],
}
