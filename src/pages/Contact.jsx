import PageHeader from '../components/PageHeader.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact us" />
      <ContactSection showIntro={false} />
    </>
  );
}
