export const Questions = [
  {
    level: 1,
    caption: "Халаасны мөнгөний оньсого",
    desc: "Дүрийн өдөр тутмын хэрэглээг зохицуулаарай!",
    quests: [
      {
        isDilemma: false,
        name: "",
        options: [
          {
            choice: "Дуртай хоолоо авч идэх",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Найзтайгаа хамт ps тоглох",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Шинэ чихэвч авах",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Ээждээ бэлэг авч өгөх",
            result: { happiness: 1, money: 0 },
          },
        ],
      },
      {
        isDilemma: false,
        name: "",
        options: [
          {
            choice: "Netflix ийн эрхээ сунгах",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Хоол авч идэх",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Шинэ гутал авах",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Хичээлийн хэрэгсэл авах",
            result: { happiness: 1, money: 0 },
          },
        ],
      },
      {
        isDilemma: true,
        name: " Дүр хэт их мөнгө үрснээс өөрийнхөө сарын мөнгийг 2 өдөрт үрчжээ. Түүнд үлдсэн сарын халаасны мөнгийг нь олоход туслаарай!",
        options: [
          {
            choice: "Цагийн ажил хйих",
            result: { happiness: 0, money: 1 },
          },
          {
            choice: "Найзаасаа зээлэх ",
            result: { debt: 1 },
          },
          {
            choice: "Мөнгөгүй явах",
            result: { happiness: 0 },
          },
        ],
      },
      {
        isDilemma: false,
        name: "Сар өнгөрч эцэг эхээсээ мөнгө авав",
        options: [
          {
            choice: "Хоол авч идэх",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Сургалтанд явах",
            result: { money: 0, happiness: 1 },
          },
          {
            choice: "Цагийн ажил хийх",
            result: { happiness: 0, money: 1 },
          },
          {
            choice: "Өөртөө шинэ хувцас авах",
            result: { happiness: 1, money: 0 },
          },
        ],
      },
      {
        isDilemma: false,
        name: "",
        options: [
          {
            choice: "Ирээдүйн хүсэл зориулж нэг хэсгийг хадгалах",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Cүүлийн үеийн компьютер авах",
            result: { happiness: 1, money: 0 },
          },
        ],
      },
    ],
  },
  {
    level: 2,
    caption: "Цагийн ажилтны амьдрал",
    desc: "Дүр өөрийн санхүүгийн тусдаа байдлаа бүтээхийн тулд ажил хийж эхлэнэ. Түүнд зөв ажил, цалингаа үр ашигтай зарцуулахад нь туслаарай!",
    quests: [
      {
        order: 1,
        isDilemma: false,
        name: "",
        options: [
          {
            choice: "Цагийн ажил хайх",
            result: { job: true },
          },
          {
            choice: "Ажил олох",
            result: {
              message: "сурагчид тохирсон бүтэн цагийн ажил олдсонгүй",
              happiness: 0,
            },
          },
          {
            choice: "Өөрт байгаа зүйлсээ зарах",
            result: { happiness: 0, money: 1 },
          },
        ],
      },
      {
        order: 2,
        isDilemma: false,
        name: "",
        options: [
          {
            choice: "Ном авах",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Мөнгөө хадгалах",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Найздаа мөнгө зээлэх",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Хандивт өгөх",
            result: { happiness: 1, money: 0 },
          },
        ],
      },
      {
        order: 3,
        isDilemma: false,
        name: "Сар өнгөрч эцэг эхээсээ мөнгө авав",
        options: [
          {
            choice: "Их сургуулийн шалгалтандаа бэлдэх",
            result: { happiness: 1 },
          },
          {
            choice: "Шинэ хувцас авах",
            result: { money: 0, happiness: 1 },
          },
          {
            choice: "Утсаа сайжруулах",
            result: { happiness: 1, money: 0 },
          },
          {
            choice: "Мөнгөө хуримтлалдаа хийх",
            result: { happiness: 1, money: 0 },
          },
        ],
      },
      {
        order: 4,
        isDilemma: true,
        name: "Дүр ажлаасаа уйдаж байна",
        options: [
          {
            choice: "ajlaa solih",
            result: { happiness: 0, money: 1 },
          },
          {
            choice: "үргэлжлүүлэн ажлаа хийнэ  ",
            result: { debt: 1 },
          },
          {
            choice: "ажлаасаа гарах",
            result: { happiness: 0 },
          },
          {
            choice: "даргатайгаа ярилцах",
            result: {
              happiness: 1,
              message:
                "Дарга нь түүнийг ойлгож ажиллах уян хатан нөхцөл санал болгов",
            },
          },
        ],
      },
    ],
  },
];
