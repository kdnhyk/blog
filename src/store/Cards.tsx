export interface IsCard {
  id: number;
  imageSorce: any;
  title: string;
  description?: string;
}

export const Cards: IsCard[] = [
  {
    id: 0,
    imageSorce: require("../img/calculator.jpg"),
    title: "Calculator",
    description:
      "(2022/10/18) To fix: 1. 숫자 앞에 0이 입력 가능한 것. 2. 때때로 답이 0이 되는 것",
  },
  { id: 1, imageSorce: "", title: "Lots", description: "(2022/04/12)" },
  { id: 2, imageSorce: "", title: "GuestRoom" },
];
