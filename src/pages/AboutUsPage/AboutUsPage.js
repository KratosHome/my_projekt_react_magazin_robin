import React from "react";
import "./AboutUsPage.css";
import InstaBlock from "../../container/Main/InstaBlock/InstaBlock";
import abaut_ass_two from "../../components/Cart/page_img/abaut_ass_two.png";
import abaut_ass from "../../components/Cart/page_img/abaut_ass.png";

const AboutUsPage = () => {
  return (
    <>
      <div class="container test">
        <h1>
          <svg viewBox="0 0 1550 100">
            <text class="h1_animation_about_ass" x="35%" y="80%">
              Про Robbin Bobbin
            </text>
          </svg>
        </h1>
        <div class="about_ass_img_one">
          <img src={abaut_ass} alt="Pro Nass"></img>
        </div>
        <div class="about_ass_img_two">
          <img src={abaut_ass_two} alt="Pro Nass two"></img>
          <h2 class="about_ass_content">
            Ми раді вітати вас в нашому кафе robin bobbin і впевнені, що
            неодмінно сподобається. наш колектив зустріне вас щирою посмішкою та
            ввічлевим обслуговуванням. в нашому меню ви можете знайти солодкі
            вафельки і почастувати малечу, а також солені. наші кухарі
            використовують тільки найкращі і найякісніші продукти. Ми пропонуємо
            різноманнітя напоїв: фреш, чаї на основі фруктів, фреші, лимонади. А
            для поціновувачив кави ми пригощаємо справжніми свіжозмеленеми
            зернами від LAVAZZA, яка славить своєю італьйською якістю
          </h2>
        </div>
      </div>
      <InstaBlock />
    </>
  );
};

export default AboutUsPage;
