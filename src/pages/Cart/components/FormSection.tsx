import { ReactNode } from "react";
import { FormSectionContainer } from "./FormSectionContainer";

interface FormSectionProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function FormSection({icon, title, subtitle, children}: FormSectionProps) {
  return (
    <FormSectionContainer>
      <div className="section">
        <div className="titleWrapper">
          <span className="icon">{icon}</span>
          <div className="textWrapper">
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
        </div>
          {children}
      </div>
    </FormSectionContainer>
  );
}