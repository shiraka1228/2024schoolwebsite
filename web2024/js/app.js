const { createApp } = Vue;

createApp({
    data() {
        return {
            art2: [
                { imgUrl: "img2/cr3.PNG", ins: "作品1", h5: "BIRTHDAY", text: "彩虹社同人作品" },
                { imgUrl: "img2/fp06.png", ins: "作品2", h5: "少女レイ", text: "彩虹社同人作品" },
                { imgUrl: "img2/cr2.png", ins: "作品3", h5: "404!", text: "刀劍亂舞同人作品" },
                { imgUrl: "img2/pf05.png", ins: "作品4", h5: "CHRISTMAS", text: "刀劍亂舞同人作品" },

            ]
        };
    }
}).mount("#app4");