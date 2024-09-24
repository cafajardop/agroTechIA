import { Steps } from "@components/index";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
  mainTitle?: string;
  title?: string;
  paragraph?: string;  
}

export const AboutPage = ({id}:Props) => {
  const { t } = useTranslation();
  return <Steps id={id} mainTitle={t("titleSteps")} title={t("titleSteps1")}  />;
};
