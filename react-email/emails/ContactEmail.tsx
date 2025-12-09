import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Row,
  Column,
  Link,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
  language?: 'es' | 'eu' | 'en';
}

const translations = {
  es: {
    preview: 'Nuevo mensaje de contacto',
    heading: 'Nuevo Mensaje',
    subheading: 'Has recibido una nueva consulta a través de tu portafolio.',
    nameLabel: 'Nombre',
    emailLabel: 'Email',
    messageLabel: 'Mensaje',
    footer:
      'Este mensaje fue enviado desde el formulario de contacto de tu portafolio.',
    viewProfile: 'Ver perfil del remitente',
  },
  eu: {
    preview: 'Kontaktu mezu berria',
    heading: 'Mezu Berria',
    subheading: 'Kontsulta berri bat jaso duzu zure portfolioaren bidez.',
    nameLabel: 'Izena',
    emailLabel: 'Posta elektronikoa',
    messageLabel: 'Mezua',
    footer: 'Mezu hau zure portfolioko kontaktu formulariotik bidali da.',
    viewProfile: 'Ikusi bidaltzailearen profila',
  },
  en: {
    preview: 'New Contact Message',
    heading: 'New Message',
    subheading: 'You have received a new inquiry via your portfolio.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    footer: 'This message was sent from your portfolio contact form.',
    viewProfile: 'View sender profile',
  },
};

export const ContactEmail = ({
  name = 'Jon Ramos',
  email = 'jon@example.com',
  message = 'I am interested in collaborating on a new project. I really like your work and would love to discuss further details.',
  language = 'en',
}: ContactEmailProps) => {
  const t = translations[language] || translations.en;

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#000000',
                offwhite: '#fafafa',
                gray: '#666666',
              },
              fontFamily: {
                sans: [
                  '-apple-system',
                  'BlinkMacSystemFont',
                  '"Segoe UI"',
                  'Roboto',
                  '"Helvetica Neue"',
                  'Ubuntu',
                  'sans-serif',
                ],
              },
            },
          },
        }}
      >
        <Body className="bg-white font-sans text-brand my-auto mx-auto px-2">
          <Container className="border border-solid border-[#eaeaea] rounded-lg my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <div className="w-12 h-12 bg-black rounded-full mx-auto flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">JR</span>
              </div>
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                {t.heading}
              </Heading>
              <Text className="text-black text-[14px] leading-[24px] text-center">
                {t.subheading}
              </Text>
            </Section>

            <Section className="my-[32px] p-[24px] bg-[#f9f9f9] rounded-lg">
              <Row className="mb-[16px]">
                <Column>
                  <Text className="text-[#666666] text-[12px] font-bold uppercase tracking-wider m-0 mb-[4px]">
                    {t.nameLabel}
                  </Text>
                  <Text className="text-black text-[14px] m-0 font-medium">
                    {name}
                  </Text>
                </Column>
              </Row>
              <Row className="mb-[16px]">
                <Column>
                  <Text className="text-[#666666] text-[12px] font-bold uppercase tracking-wider m-0 mb-[4px]">
                    {t.emailLabel}
                  </Text>
                  <Link
                    href={`mailto:${email}`}
                    className="text-blue-600 text-[14px] m-0 font-medium no-underline"
                  >
                    {email}
                  </Link>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-[#666666] text-[12px] font-bold uppercase tracking-wider m-0 mb-[8px]">
                    {t.messageLabel}
                  </Text>
                  <Text className="text-black text-[14px] leading-[24px] m-0 whitespace-pre-wrap">
                    {message}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
              {t.footer}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
