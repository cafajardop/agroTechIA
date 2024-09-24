

interface Props {
  id: string;
  mainTitle: string;
  title: string;
  paragraph?: string;
}

export const ContactPage = ({id, mainTitle, title}:Props) => {
  return (
    <section id={id}>
      <h2>
        <span>{mainTitle}</span> {title}
      </h2>
    </section>
  )
}
