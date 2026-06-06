export default function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I'm Manushree 👋</h1>

      <h2>
        Frontend Developer • CSE Student at IIIT Trichy •
        💻 160+ LeetCode Problems Solved
      </h2>

      <p>
        Passionate about building responsive and interactive web
        applications using React and modern web technologies.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="hero-btn">
          View Projects
        </a>

        <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="hero-btn"
>
  View Resume
</a>

<a
  href="/resume.pdf"
  download
  className="hero-btn"
>
  Download Resume
</a>
      </div>
    </section>
  );
}