import { useEffect } from "react";
import { useLang } from "./context/LangContext";
import Cursor from "./assets/components/Cursor/Cursor";
import Navbar from "./assets/components/Navbar/Navbar";
import Hero from "./assets/Pages/Hero";
import Projects from "./assets/Pages/Projects";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact";
import Footer from "./assets/components/Footer/Footer";

const App = () => {
  const { lang, setLang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang === "ES" ? "es" : "en";

    const title =
      lang === "ES"
        ? "Jhon Fredy Hidalgo | Full Stack Developer"
        : "Jhon Fredy Hidalgo | Full Stack Developer";
    const description =
      lang === "ES"
        ? "Portafolio de Jhon Fredy Hidalgo, desarrollador full stack especializado en productos escalables, alto rendimiento y experiencia de usuario."
        : "Portfolio of Jhon Fredy Hidalgo, a full stack developer focused on scalable products, high performance, and user experience.";

    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );

    ogTitle?.setAttribute("content", title);
    ogDescription?.setAttribute("content", description);
    twitterTitle?.setAttribute("content", title);
    twitterDescription?.setAttribute("content", description);
  }, [lang]);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    if (!items.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Cursor />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Projects lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default App;
