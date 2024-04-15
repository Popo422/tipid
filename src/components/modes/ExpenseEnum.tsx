import { BiGroup } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { FaDog, FaPaintBrush } from "react-icons/fa";
import { IoCar } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { IoMdCut } from "react-icons/io";
import { IoMedkitOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

enum ExpenseCategory {
  FOOD = "food",
  SOCIAL = "social",
  PETS = "pets",
  TRANSPORT = "transport",
  CULTURE = "culture",
  HOUSEHOLD = "household",
  APPAREL = "apparel",
  BEAUTY = "beauty",
  HEALTH = "health",
  EDUCATION = "education",
  GIFTS = "gifts",
  OTHER = "other",
}

interface ExpenseCategoryIconMap {
  [key: string]: JSX.Element;
}

const expenseCategoryIcons: ExpenseCategoryIconMap = {
  [ExpenseCategory.FOOD]: <IoFastFood />,
  [ExpenseCategory.SOCIAL]: <BiGroup />,
  [ExpenseCategory.PETS]: <FaDog />,
  [ExpenseCategory.TRANSPORT]: <IoCar />,
  [ExpenseCategory.CULTURE]: <FaPaintBrush />,
  [ExpenseCategory.HOUSEHOLD]: <IoHome />,
  [ExpenseCategory.APPAREL]: <IoShirtOutline />,
  [ExpenseCategory.BEAUTY]: <IoMdCut />,
  [ExpenseCategory.HEALTH]: <IoMedkitOutline />,
  [ExpenseCategory.EDUCATION]: <IoSchoolOutline />,
  [ExpenseCategory.GIFTS]: <FaGift />,
  [ExpenseCategory.OTHER]: <AiOutlineQuestionCircle />,
};

export { ExpenseCategory, expenseCategoryIcons };
