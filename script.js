const gameStory = {
    start: {
        type: "story",
        content: "Hé nô Mỹ Duyên, chào mừn iem đến với trò chưi cụa zin hehe (níu iem mún thay đổi câu trả lời thì ấn zô nút quay lại nhoa)💝",
        choices: ["Bắt đầu thuuui! ✨", "Típ tục trò chưii! ❤️‍🔥"],
        nextStep: "question1",
        photo: {
            src: "./images/pic1.jpg",
            caption: "Bé chụt bé xíu hé he 💕"
        }
    },
    question1: {
        type: "puzzle",
        question: "Nếu có thời gian rảnh thì iem thích nhất hoạt động nèo sau đây nhứt?",
        choices: [
            "Đi shopping và mua sắm",
            "Nghe nhạc và thư giãn",
            "Trang điểm và làm đẹp",
            "Đi cafe với bạn bè"
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Đi shopping và mua sắm": "shopping_branch",
            "Nghe nhạc và thư giãn": "music_branch",
            "Trang điểm và làm đẹp": "beauty_branch",
            "Đi cafe với bạn bè": "cafe_branch"
        },
        photo: {
            src: "./images/pic2.jpg",
            caption: "Iem mặt zuông cutiii 💑"
        }
    },
    shopping_branch: {
        type: "puzzle",
        question: "Nếu đi shopping thì iem thích mua món đồ nèo sau đây nhứt?",
        choices: [
            "Quần áo thời trang",
            "Giày dép xinh xinh",
            "Túi xách đáng iu",
            "Phụ kiện dễ thưn"
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Quần áo thời trang": "fashion_style_clothes",
            "Giày dép xinh xinh": "fashion_style_shoes",
            "Túi xách đáng iu": "fashion_style_bag",
            "Phụ kiện dễ thưn": "fashion_style_accessories"
        },
        photo: {
            src: "./images/pic3.jpg",
            caption: "iem gơ phố bé tí 🌟"
        }
    },
    fashion_style_clothes: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn quần áo thời trang đún hum hehe, vậy iem thích loại quần áo nèo nè?",
        choices: [
            "Áo vứi quần ngủ ở nhà",
            "Áo phông cutee",
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại quần áo iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Áo vứi quần ngủ ở nhà": "fashion_style_clothes_sleep",
            "Áo phông cutee": "fashion_style_clothes_casual",
            "input": "fashion_style_clothes_other"
        },
        photo: {
            src: "./images/pic4.jpg",
            caption: "iem seoo phìi 🤳"
        }
    },
    fashion_style_shoes: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn giày dép xinh xinh đún hum hehe, vậy iem thích loại giày dép nèo nè?",
        choices: [
            "Giày thể thao",
            "Giày sneaker",
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại giày dép iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Giày thể thao": "fashion_style_shoes_sport",
            "Giày sneaker": "fashion_style_shoes_sneaker",
            "input": "fashion_style_shoes_other"
        },
        photo: {
            src: "./images/pic5.jpg",
            caption: "iemm nớn rúi iem đi chưi 👣"
        }
    },
    fashion_style_bag: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn túi xách đáng iu đún hum hehe, vậy iem thích loại túi xách nèo nè?",
        choices: [
            "Túi xách mini",
            "Túi xách đeo vai",
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại túi xách iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Túi xách mini": "fashion_style_bag_mini",
            "Túi xách đeo vai": "fashion_style_bag_shoulder",
            "input": "fashion_style_bag_other"
        },
        photo: {
            src: "./images/pic6.jpg",
            caption: "iem zề quê nhạnh quó ❄️"
        }
    },
    fashion_style_accessories: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn phụ kiện dễ thương đún hum hehe, vậy iem thích loại phụ kiện nèo nè?",
        choices: [
            "Nhẫn đeo tay 💍",
            "Đồng hồ 🕒",
            "Bông tai 💐",
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại phụ kiện iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Nhẫn đeo tay 💍": "fashion_style_accessories_rings",
            "Đồng hồ 🕒": "fashion_style_accessories_watch",
            "Bông tai 💐": "fashion_style_accessories_earrings",
            "input": "fashion_style_accessories_other"
        },
        photo: {
            src: "./images/pic7.jpg",
            caption: "iemm xinh xinnh 💋"
        }
    },
    fashion_style_clothes_sleep: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn áo vứi quần ngủ ở nhà đún hum hehe, vậy iem thích loại áo vứi quần nèo nè? (iem cóa thể ấn zô bỉu tượng kính lúp để xem ảnh to hưn nè 🔍)",
        choices: [
            {
                text: "Áo thỏ 🐰",
                image: "./images/aotho.jpg"
            },
            {
                text: "Áo gấu 🧸",
                image: "./images/aogau.jpg"
            },
            {
                text: "Áo Shinn 👦",
                image: "./images/aoshin.jpg"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại áo vứi quần iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Áo thỏ 🐰": "fashion_style_next",
            "Áo gấu 🧸": "fashion_style_next",
            "Áo Shinn 👦": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic8.jpg",
            caption: "zin vứi iem đi ăng 😋"
        }
    },
    fashion_style_clothes_casual: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn áo phông cutee đún hum hehe, vậy iem thích loại áo phông nèo nè? (iem cóa thể ấn zô bỉu tượng kính lúp để xem ảnh to hưn nè 🔍)",
        choices: [
            {
                text: "Áo capypara 🦦",
                image: "./images/capy.jpg"
            },
            {
                text: "Áo mèo 🐱",
                image: "./images/aomeo.jpg"
            },
            {
                text: "Áo nhìu màu 🎨",
                image: "./images/ao10.jpg"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại áo phông iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Áo capypara 🦦": "fashion_style_next",
            "Áo mèo 🐱": "fashion_style_next",
            "Áo nhìu màu 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic9.jpg",
            caption: "bé mặc váy cụa mẹ hehee 👗"
        }
    },
    fashion_style_shoes_sport: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn giày thể thao đún hum hehe, vậy iem thích loại giày thể thao nèo nè? (iem cóa thể ấn zô bỉu tượng kính lúp để xem ảnh to hưn nè 🔍)",
        choices: [
            {
                text: "Giày Kappa 🦦",
                image: "./images/kappa.jpg"
            },
            {
                text: "Giày cutii 🤩",
                image: "./images/giaycute.jpg"
            },
            {
                text: "Giày màu be hehe 🎨",
                image: "./images/giaybe.jpg"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại áo phông iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Giày Kappa 🦦": "fashion_style_next",
            "Giày cutii 🤩": "fashion_style_next",
            "Giày màu be hehe 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic10.jpg",
            caption: "iem ngụ khò khò 😴"
        }
    },
    fashion_style_shoes_sneaker: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn giày sneaker đún hum hehe, vậy iem thích loại giày sneaker nèo nè? (iem cóa thể ấn zô bỉu tượng kính lúp để xem ảnh to hưn nè 🔍)",
        choices: [
            {
                text: "Giày Nike trắng 🤩",
                image: "./images/giaynike.jpg"
            },
            {
                text: "Giày Nike hồng 😍",
                image: "./images/nikepink.jpg"
            },
            {
                text: "Giày converse hồng nún 🎨",
                image: "./images/conver.jpg"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại áo phông iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Giày Kappa 🦦": "fashion_style_next",
            "Giày cutii 🤩": "fashion_style_next",
            "Giày màu be hehe 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic11.jpg",
            caption: "iem nhận giấy khen heheh 📝"
        }
    },
    fashion_style_bag_mini: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn túi xách mini đún hum hehe, vậy iem thích hãng túi xách mini nèo nè?",
        choices: [
            {
                text: "Charles & Keith 🤩",
                image: "./images/ck.jpg"
            },
            {
                text: "Elly 😍",
                image: "./images/elly.jpg"
            },
            {
                text: "Coach 🎨",
                image: "./images/coach.jpg"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây hãng túi xách iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Charles & Keith 🦦": "fashion_style_next",
            "Elly 😍": "fashion_style_next",
            "Coach 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic12.jpg",
            caption: "iem ngụ ở quê zzz 💤"
        }
    },
    fashion_style_bag_shoulder: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn túi xách đeo vai đún hum hehe, vậy iem thích hãng túi xách đeo vai nèo nè?",
        choices: [
            {
                text: "Charles & Keith 🤩",
                image: "./images/cks.jpg"
            },
            {
                text: "Elly 😍",
                image: "./images/ellys.jpg"
            },
            {
                text: "Coach 🎨",
                image: "./images/coachs.jpg"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây hãng túi xách iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Charles & Keith 🦦": "fashion_style_next",
            "Elly 😍": "fashion_style_next",
            "Coach 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic13.jpg",
            caption: "iem chụp ảnh vứi gấu 🙀"
        }
    },
    fashion_style_accessories_rings: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn nhẫn đeo tay đún hum hehe, vậy iem thích hãng nhẫn đeo tay nèo nè?",
        choices: [
            {
                text: "Pandora 🤩",
                image: "./images/pandora.png"
            },
            {
                text: "Pnj 😍",
                image: "./images/pnj.png"
            },
            {
                text: "Wellington 🎨",
                image: "./images/well.jpg"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây hãng nhẫn iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Pandora 🦦": "fashion_style_next",
            "Pnj 😍": "fashion_style_next",
            "Wellington 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic14.jpg",
            caption: "iem bé tí chụp ảnh với mẹ nè 📸"
        }
    },
    fashion_style_accessories_watch: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn đồng hồ đún hum hehe, vậy iem thích hãng đồng hồ nèo nè?",
        choices: [
            {
                text: "Casio 🤩",
                image: "./images/casio.png"
            },
            {
                text: "Orient 😍",
                image: "./images/ori.png"
            },
            {
                text: "Daniel Wellington 🎨",
                image: "./images/dw.png"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây hãng đồng hồ iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Casio 🦦": "fashion_style_next",
            "Orient 😍": "fashion_style_next",
            "Daniel Wellington 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic15.jpg",
            caption: "iem nhăn zin huhuhu 😭"
        }
    },
    fashion_style_accessories_earrings: {
        type: "puzzle",
        question: "Zinn đoán n iem vừa chọn bông tai đún hum hehe, vậy iem thích hãng bông tai nèo nè?",
        choices: [
            {
                text: "PNJ 🤩",
                image: "./images/pnje.png"
            },
            {
                text: "Pandora 😍",
                image: "./images/pandorae.png"
            },
            {
                text: "Lili 🎨",
                image: "./images/lili.png"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây hãng bông tai iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "PNJ 🦦": "fashion_style_next",
            "Pandora 😍": "fashion_style_next",
            "Lili 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic16.jpg",
            caption: "bé chụt và biệt phủ ở quê 🏠"
        }
    },

    music_branch: {
        type: "puzzle",
        question: "Thể loại nhạc nèo iem thích nhứt?",
        choices: [
            "Nhạc Ballad nhẹ nhàng",
            "Nhạc US-UK sôi động",
            "Nhạc Việt Nam remix giựt giựt",
            "Nhạc lofi thư giãn"
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: "music_mood",
        photo: {
            src: "./images/pic4.jpg",
            caption: "Những chuyến đi đáng nhớ ✨"
        }
    },
    music_mood: {
        type: "puzzle",
        question: "Ngoài nghe nhạc ra thì iem còn thích nèm gì khéc húm?",
        choices: [
            "Đi shopping và mua sắm",
            "Trang điểm và làm đẹp",
            "Đi cafe với bạn bè"
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Đi shopping và mua sắm": "shopping_branch",
            "Trang điểm và làm đẹp": "beauty_branch",
            "Đi cafe với bạn bè": "cafe_branch"
        },
        photo: {
            src: "./images/pic17.jpg",
            caption: "zin với chụt ở vũn tàu 🌊"
        }
    },
    beauty_branch: {
        type: "puzzle",
        question: "Có loại mĩ phẩm nèo mà iem thít mòa chưa cóa húm?",
        choices: [
            "Son môi 💄",
            "Nước hoa 🌸",
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại mĩ phẩm iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Son môi 💄": "beauty_sonmoi",
            "Nước hoa 🌸": "beauty_nuochoa",
            "input": "beauty_other"
        },
        photo: {
            src: "./images/pic18.jpg",
            caption: "iemm cóa râu hú hu 🤭"
        }
    },
    beauty_sonmoi: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn son môi đún hum hehe, vậy iem thích hãng son môi nèo nè?",
        choices: [
            {
                text: "Dior 🤩",
                image: "./images/dior.PNG"
            },
            {
                text: "Gucci 😍",
                image: "./images/gucci.png"
            },
            {
                text: "Loreal 🎨",
                image: "./images/loreal.PNG"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây hãng son môi iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Dior 🦦": "fashion_style_next",
            "Gucci 😍": "fashion_style_next",
            "Loreal 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic19.jpg",
            caption: "iem xinh điệp và lun linh 💋"
        }
    },
    beauty_nuochoa: {
        type: "puzzle",
        question: "Zinn đoán nà iem vừa chọn nước hoa đún hum hehe, vậy iem thích hãng nước hoa nèo nè?",
        choices: [
            {
                text: "Versace 🤩",
                image: "./images/vers.png"
            },
            {
                text: "Versace nựa 😍",
                image: "./images/vers2.png"
            },
            {
                text: "Chanel 🎨",
                image: "./images/coco.png"
            },
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây hãng nước hoa iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Versace 🦦": "fashion_style_next",
            "Versace nựa 😍": "fashion_style_next",
            "Chanel 🎨": "fashion_style_next",
            "input": "fashion_style_next"
        },
        photo: {
            src: "./images/pic20.jpg",
            caption: "iem và zin đi ăng nựa nè 🍻"
        }
    },
    cafe_branch: {
        type: "puzzle",
        question: "Loại đồ uống nèo mà iem thít nè?",
        choices: [
            "Cà phê sữa ☕",
            "Trà sữa các loại ✨",
            "Sinh tố 🥤",
            {
                type: "input",
                placeholder: "Hoặc gõ vào đây loại đồ uống iem thích nhứt...",
                label: "Loại khác"
            }
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Cà phê sữa ☕": "cafe_end",
            "Trà sữa các loại ✨": "cafe_end",
            "Sinh tố 🥤": "cafe_end",
            "input": "cafe_end"
        },
        photo: {
            src: "./images/pic21.jpg",
            caption: "hép ni new year 🎉"
        }
    },
    cafe_end: {
        type: "puzzle",
        question: "Ngoài đi cafe ra thì iem còn thích nèm gì khéc húm?",
        choices: [
            "Đi shopping và mua sắm",
            "Trang điểm và làm đẹp",
        ],
        hint: "Điều này sẽ giúp zin hiểu iem hơn nè",
        nextStep: {
            "Đi shopping và mua sắm": "shopping_branch",
            "Trang điểm và làm đẹp": "beauty_branch",
        },
        photo: {
            src: "./images/pic22.jpg",
            caption: "iemm chụp với bách hé he 😎"
        }
    },
    // Thêm các nhánh khác tương tự...
};

let currentStep = 'start';
let stepHistory = ['start']; // Mảng lưu lịch sử các bước
const answers = [];

const giftBox = document.getElementById('giftBox');
const giftContainer = document.querySelector('.gift-container');
const mainContainer = document.getElementById('mainContainer');

// Thêm mảng chứa đường dẫn các ảnh
const photos = [
    {
        src: "./images/pic1.jpg",
        caption: "Bé chụt bé xíu hé he 💕"
    },
    {
        src: "./images/pic2.jpg",
        caption: "Iem mặt zuông cutiii 💑"
    },
    {
        src: "./images/pic3.jpg",
        caption: "Dạo phố cùng nhau 🌟"
    },
    {
        src: "./images/pic4.jpg",
        caption: "Những chuyến đi đáng nhớ ✨"
    },
    {
        src: "./images/pic5.jpg",
        caption: "Khoảnh khắc ngọt ngào 💝"
    },
    {
        src: "./images/pic6.jpg",
        caption: "Những khoảnh khắc đẹp đẽ 🌹"
    },
    {
        src: "./images/pic7.jpg",
        caption: "Những khoảnh khắc đẹp đẽ 🌹"
    },
    {
        src: "./images/pic8.jpg",
        caption: "Những khoảnh khắc đẹp đẽ 🌹"
    },
    {
        src: "./images/pic9.jpg",
        caption: "Những khoảnh khắc đẹp đẽ 🌹"
    }
];

function createBubbles() {
    const container = document.getElementById('bubbleContainer');
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random size
        const size = Math.random() * 30 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Random delay
        bubble.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(bubble);
    }
}

function createSparkles() {
    const container = document.getElementById('sparkleContainer');
    const sparkleCount = 30;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        
        // Random delay
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(sparkle);
    }
}

function createFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    const heartSymbols = ['💖', '💝', '💕', '💗', '💓'];
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 6}s`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heartsContainer.appendChild(heart);
    }
}

window.addEventListener('load', () => {
    createFloatingHearts();
    createBubbles();
    createSparkles();
});

giftBox.addEventListener('click', () => {
    backgroundMusic.play().catch(() => {
        console.log('Autoplay prevented');
    });
    giftBox.classList.add('opened');
    setTimeout(() => {
        giftContainer.classList.add('hide');
        mainContainer.classList.remove('hidden');
        setTimeout(() => {
            mainContainer.classList.add('show');
            const photoElement = document.getElementById('couplePhoto');
            photoElement.style.animation = 'fadeInRotate 1s ease forwards';
            showCurrentStep();
        }, 100);
    }, 1000);
});

function showCurrentStep() {
    const step = gameStory[currentStep];
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    
    if (!step) {
        showFinalMessage();
        return;
    }

    // Cập nhật ảnh từ câu hỏi hiện tại
    const photoElement = document.getElementById('couplePhoto');
    const currentPhoto = step.photo;
    
    photoElement.style.opacity = '0';
    photoElement.style.transform = 'scale(0.95) rotate(-3deg)';
    
    setTimeout(() => {
        const imgElement = photoElement.querySelector('img');
        const labelElement = photoElement.querySelector('.photo-label');
        
        imgElement.src = currentPhoto.src;
        labelElement.textContent = currentPhoto.caption;
        
        photoElement.style.opacity = '1';
        photoElement.style.transform = 'scale(1) rotate(-3deg)';
    }, 300);

    // Tạo giao diện câu hỏi kiểu Ai là triệu phú
    questionEl.className = 'millionaire-question';
    
    questionEl.innerHTML = `
        <div class="question-header">
            ${stepHistory.length > 0 ? 
                '<button class="back-button" onclick="goBack()">↩️ Quay lại</button>' 
                : ''
            }
        </div>
        <div class="question-text">${step.question || step.content}</div>
        ${step.hint ? `<button class="hint-button" onclick="showHint('${step.hint}')"> Gợi ý</button>` : ''}
    `;
    
    choicesEl.innerHTML = '';
    choicesEl.className = 'millionaire-choices';
    
    if (step.isInput) {
        // Xử lý câu hỏi dạng input
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        inputGroup.innerHTML = `
            <textarea class="story-input" placeholder="${step.placeholder}"></textarea>
            <button class="submit-btn" onclick="submitAnswer()">Tiếp tục</button>
        `;
        choicesEl.appendChild(inputGroup);
    } else {
        // Tạo các lựa chọn dạng Ai là triệu phú
        const letters = ['A', 'B', 'C', 'D'];
        step.choices.forEach((choice, index) => {
            const button = document.createElement('div');
            button.className = 'millionaire-choice';
            
            if (typeof choice === 'object' && choice.type === 'input') {
                // Tạo lựa chọn dạng input
                button.innerHTML = `
                    <span class="choice-letter">${letters[index]}</span>
                    <div class="choice-input-container">
                        <span class="choice-text">${choice.label}</span>
                        <input type="text" class="choice-input" placeholder="${choice.placeholder}">
                        <button class="choice-submit">OK</button>
                    </div>
                `;
                const input = button.querySelector('.choice-input');
                const submitBtn = button.querySelector('.choice-submit');
                
                submitBtn.addEventListener('click', () => {
                    if (input.value.trim()) {
                        selectChoice('input');
                    }
                });
                
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' && input.value.trim()) {
                        selectChoice('input');
                    }
                });
            } else if (typeof choice === 'object' && choice.image) {
                // Xử lý choice có ảnh
                button.innerHTML = `
                    <span class="choice-letter">${letters[index]}</span>
                    <div class="choice-content">
                        <img src="${choice.image}" alt="${choice.text}" class="choice-image">
                        <span class="choice-text">${choice.text}</span>
                        <span class="zoom-icon" onclick="event.stopPropagation(); showImageModal('${choice.image}', '${choice.text}')">
                            🔍
                        </span>
                    </div>
                `;
                button.addEventListener('click', () => selectChoice(choice.text));
            } else {
                // Tạo lựa chọn thông thường
                button.innerHTML = `
                    <span class="choice-letter">${letters[index]}</span>
                    <span class="choice-text">${choice}</span>
                `;
                button.addEventListener('click', () => selectChoice(choice));
            }
            
            choicesEl.appendChild(button);
        });
    }
}

// Thêm hàm mới để hiển thị gợi ý
function showHint(hint) {
    Swal.fire({
        title: 'Gợi ý',
        text: hint,
        icon: 'info',
        confirmButtonText: 'Đã hiểu',
        confirmButtonColor: '#ffd700',
        background: '#2b1055',
        color: 'white'
    });
}

// Thêm biến để quản lý âm thanh
const correctSound = document.getElementById('correctSound');
const backgroundMusic = document.getElementById('backgroundMusic');

// Thêm hàm phát nhạc
function playCorrectSound() {
    correctSound.currentTime = 0; // Reset âm thanh về đầu
    correctSound.play();
}

// Thêm Firebase config
const firebaseConfig = {
    // Thông tin config từ Firebase console
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Sửa lại hàm selectChoice để lưu câu trả lời
function selectChoice(choice) {
    const choices = document.querySelectorAll('.millionaire-choice');
    let selectedChoice;
    let inputValue;
    
    if (choice === 'input') {
        inputValue = document.querySelector('.choice-input').value.trim();
        selectedChoice = Array.from(choices).find(el => 
            el.querySelector('.choice-input')
        );
    } else {
        selectedChoice = Array.from(choices).find(el => 
            el.querySelector('.choice-text')?.textContent === choice
        );
    }
    
    if (!selectedChoice) return; // Kiểm tra nếu không tìm thấy lựa chọn
    
    // Vô hiệu hóa tất cả các lựa chọn
    choices.forEach(choice => {
        choice.classList.add('disabled');
    });
    
    // Thêm hiệu ứng đáp án đúng
    selectedChoice.classList.add('correct');
    playCorrectSound();
    
    // Thêm phần lưu câu trả lời
    const answer = {
        question: gameStory[currentStep].question,
        answer: choice === 'input' ? inputValue : choice,
        timestamp: new Date().toISOString()
    };

    // Lưu vào Firebase
    db.collection('answers').add(answer)
        .then(() => {
            console.log('Đã lưu câu trả lời');
        })
        .catch((error) => {
            console.error('Lỗi khi lưu:', error);
        });
    
    setTimeout(() => {
        Swal.fire({
            title: 'Bé giỏi quóooo! 🎉',
            text: 'Iem đã trả lời đún rúi đóa!',
            icon: 'success',
            confirmButtonText: 'Tiếp tục',
            confirmButtonColor: '#4CAF50',
            background: '#fff',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }).then(() => {
            // Lưu câu trả lời và gửi email
            const answer = {
                question: gameStory[currentStep].question,
                answer: choice === 'input' ? inputValue : choice,
                timestamp: new Date().toISOString()
            };
            
            // Lưu vào LocalStorage
            let answers = JSON.parse(localStorage.getItem('answers') || '[]');
            answers.push(answer);
            localStorage.setItem('answers', JSON.stringify(answers));
            
            // Gửi email
            sendAnswerEmail(answer);
            
            // Chuyển sang câu hỏi tiếp theo
            const currentQuestion = gameStory[currentStep];
            const nextStep = typeof currentQuestion.nextStep === 'object' 
                ? currentQuestion.nextStep[choice === 'input' ? 'input' : choice]
                : currentQuestion.nextStep;

            if (nextStep) {
                stepHistory.push(currentStep);
                currentStep = nextStep;
                fadeTransition(() => showCurrentStep());
            } else {
                showFinalMessage();
            }
        });
    }, 1000);
}

function submitAnswer() {
    const input = document.querySelector('.story-input');
    if (input.value.trim()) {
        answers.push(input.value.trim());
        currentStep++;
        fadeTransition(() => showCurrentStep());
    }
}

function fadeTransition(callback) {
    const container = document.querySelector('.quiz-container');
    container.classList.add('fade-out');
    setTimeout(() => {
        callback();
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
        setTimeout(() => {
            container.classList.remove('fade-in');
        }, 500);
    }, 500);
}

function showFinalMessage() {
    const container = document.querySelector('.quiz-container');
    const result = document.getElementById('result');
    
    container.classList.add('fade-out');
    setTimeout(() => {
        container.classList.add('hidden');
        result.classList.remove('hidden');
        result.innerHTML = `
            <div class="final-header">
                <button class="back-button" onclick="backToQuiz()">↩️ Quay lại</button>
            </div>
            <h2>✨ Cảm ưn bé iuu đã chơi cùn zin! ✨</h2>
            <p>zin đã hiểu được nhiều điều thú vị về iem rùi đóa!</p>
            <p>bé có muốn chơi thêm mini game hông? 🎮</p>
            <div class="mini-games">
                <button class="game-btn puzzle-btn" onclick="startPuzzleGame()">
                    <span class="game-icon">🧩</span>
                    Xếp hình
                </button>
                <button class="game-btn memory-btn" onclick="startMemoryGame()">
                    <span class="game-icon">🎴</span>
                    Lật thẻ bài
                </button>
            </div>
            <div class="final-hearts">💖 💝 💖</div>
        `;
        result.classList.add('fade-in');
    }, 500);
}

// Thêm hàm để quay lại quiz
function backToQuiz() {
    const result = document.getElementById('result');
    const container = document.querySelector('.quiz-container');
    
    // Quay lại bước trước đó
    if (stepHistory.length > 0) {
        currentStep = stepHistory[stepHistory.length - 1];
    } else {
        currentStep = 'start';
    }
    
    result.classList.remove('fade-in');
    result.classList.add('fade-out');
    
    setTimeout(() => {
        result.classList.add('hidden');
        container.classList.remove('hidden');
        container.classList.remove('fade-out');
        showCurrentStep();
    }, 500);
}

// CSS mới cần thêm vào

backgroundMusic.volume = 0.8; // Điều chỉnh âm lượng còn 30%
correctSound.volume = 0.9; // Âm thanh trả lời đúng to hơn một chút

// Thêm hàm hiển thị modal
function showImageModal(imageSrc, imageText) {
    Swal.fire({
        imageUrl: imageSrc,
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: imageText,
        title: imageText,
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
            image: 'swal-image',
            popup: 'swal-popup-custom'
        }
    });
}

function goBack() {
    if (stepHistory.length > 0) {
        currentStep = stepHistory.pop(); // Lấy bước trước đó từ lịch sử
        answers.pop(); // Xóa câu trả lời cuối cùng
        fadeTransition(() => showCurrentStep());
    }
}

function startPuzzleGame() {
    Swal.fire({
        title: 'Xếp hình',
        html: `
            <div class="puzzle-container">
                <div class="puzzle-game">
                    <!-- Phần xếp hình sẽ được thêm vào đây -->
                </div>
            </div>
        `,
        width: 800,
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
            popup: 'puzzle-popup'
        },
        didOpen: () => {
            initPuzzleGame();
        }
    });
}

function startMemoryGame() {
    Swal.fire({
        title: 'Lật thẻ bài',
        html: `
            <div class="memory-container">
                <div class="memory-game">
                    <!-- Phần lật thẻ bài sẽ được thêm vào đây -->
                </div>
            </div>
        `,
        width: 800,
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
            popup: 'memory-popup'
        },
        didOpen: () => {
            initMemoryGame();
        }
    });
}

// Thêm hàm gửi email
function sendAnswerEmail(answer) {
    const emailContent = {
        to_email: "chunguyentuananh11b6@gmail.com", // Thay bằng email của bạn
        subject: "Có câu trả lời mới từ Mỹ Duyên",
        question: answer.question,
        answer: answer.answer,
        timestamp: new Date(answer.timestamp).toLocaleString()
    };
    
    emailjs.send(
        "service_fb6xryg", // Service ID của bạn
        "template_fb6xryg", // Template ID của bạn
        emailContent,
        "LzLRumJHYkLcO6jvO" // Public Key của bạn
    ).then(
        function(response) {
            console.log("Đã gửi email thành công!", response);
        },
        function(error) {
            console.error("Lỗi khi gửi email:", error);
        }
    );
}
