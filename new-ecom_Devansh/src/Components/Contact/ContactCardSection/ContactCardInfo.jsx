import s from "./ContactCardInfo.module.scss";
import ContactInfo from "./ContactInfo"

const ContactInfoCard = () => {
  return (
    <div className={s.contactInfo}>
      <ContactInfo iconName="instagramWhite" title="Reachout us on Instagram">
        <p>We are available 24/7, 7 days a week on Instagram.</p>
        <p>
          Instagram: <a href="https://instagram.com/your_instagram_id" target="_blank" rel="noopener noreferrer">@your_instagram_id</a>
        </p>
      </ContactInfo>

      <div className={s.horizontalLine} />

      <ContactInfo iconName="email2" title="Write To Us">
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>
          Emails: <a href="mailto:customer@exclusive.com">customer@exclusive.com</a>
        </p>
        <p>
          Emails: <a href="mailto:support@exclusive.com">support@exclusive.com</a>
        </p>
      </ContactInfo>
    </div>
  );
};
export default ContactInfoCard;
