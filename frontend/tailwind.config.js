module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            body: ['"Mukta"'],
        },
        colors: {
            white: "#FFFFFF",
            red: "#F0544F",
            orange: "#FF9F5A",
        },
        extend: {
            dropShadow: {
                "3xl": "0px 4px 14px rgba(0, 0, 0, 0.3)",
            },
            borderRadius: {
                xxl: "50px",
            },
        },
    },
    plugins: [],
};
