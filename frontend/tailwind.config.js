module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            white: "#FFFFFF",
            red: "#F0544F",
            orange: "#FF9F5A",
            blue: "#083D77",
        },
        extend: {
            boxShadow: {
                inner2: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
            },
            dropShadow: {
                normal: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            },
            borderRadius: {
                xxl: "50px",
                s: "10px",
            },
            fontSize: {
                label: "30px",
                m: "16px",
                s: "14px",
                error: "12px",
            },
        },
    },
    plugins: [],
};
