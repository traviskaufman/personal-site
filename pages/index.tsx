import Image from "next/image";
import styled from "styled-components";
import TwitterIcon from "@fortawesome/fontawesome-free/svgs/brands/twitter.svg";
import LinkedInIcon from "@fortawesome/fontawesome-free/svgs/brands/linkedin.svg";
import GithubIcon from "@fortawesome/fontawesome-free/svgs/brands/github.svg";
import MediumIcon from "@fortawesome/fontawesome-free/svgs/brands/medium.svg";
import FileIcon from "@fortawesome/fontawesome-free/svgs/regular/file.svg";

console.debug(GithubIcon);

const Main = styled.main`
  display: grid;
  grid-template: minmax(40vh, auto) repeat(2, auto) / 1fr;
  place-content: center;
  margin-top: 1rem;

  // :)
  h2 {
    @media (max-width: 768px) {
      margin-left: 1rem;
    }
  }
`;

const Headshot = styled.div`
  position: relative;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto;
`;

const NameTag = styled.section`
  display: grid;
  place-content: center;
  grid-template: 1fr / repeat(2, auto);
  grid-gap: 2rem;
  width: 100%;
  text-align: center;
  margin-top: -1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  color: black;
  background-color: white;

  @media (max-width: 768px) {
    grid-template: repeat(2, auto) / 1fr;
    grid-gap: 0.5rem;
  }

  h1 {
    grid-column: 2;
    grid-row: 1;
    font-size: 6rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;

    @media (max-width: 980px) {
      font-size: 4rem;
    }

    @media (max-width: 768px) {
      display: block;
      grid-column: 1;
      grid-row: 2;
      margin-top: 0.5rem;
    }
  }

  ${Headshot} {
    grid-column: 1;
    grid-row: 1;

    @media (max-width: 768px) {
      grid-column: 1;
      grid-row: 1;
    }
  }
`;

const About = styled.section`
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 980px) {
    grid-template: repeat(3, 1fr) / 1fr;
  }

  p {
    font-size: 1.2rem;
    display: grid;
    place-content: center;
    padding: 0.5rem;
    text-align: center;
    background: linear-gradient(
      45deg,
      rgba(83, 89, 174, 1) 0%,
      rgba(142, 57, 161, 1) 21%,
      rgba(229, 23, 139, 1) 90%
    );
    margin-top: -1rem;

    @media (max-width: 980px) {
      margin: 0 auto;
      width: 600px;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const BelowTheFold = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const SocialLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SocialLink = styled.a`
  --color: 50, 197, 255;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
  border: 1px solid rgb(var(--color));
  font-weight: bold;
  color: var(---color);
  text-decoration: none;
  outline-color: var(--color);
  position: relative;

  background-color: rgba(var(--color), 0);
  transition: background-color 100ms ease;
  &:hover,
  &:focus {
    background-color: rgba(var(--color), 1);
  }

  span {
    display: block;
    width: 48px;
    height: 48px;
    padding: 0.25rem 0;
    margin-right: 0.5rem;
    background: rgb(var(--color));

    svg {
      width: 100%;
      height: 100%;
    }
  }

  path {
    fill: white !important;
    stroke: white !important;
  }
`;

export default function Home() {
  return (
    <Main>
      <NameTag>
        <h1>Hi, I'm Travis!</h1>
        <Headshot>
          <Image
            layout="fill"
            src="/headshot.webp"
            alt="A headshot of Travis"
          />
        </Headshot>
      </NameTag>
      <BelowTheFold>
        <About>
          <p>I'm a software engineer specializing in UI / UX development.</p>
          <p>I live in NYC and love it here.</p>
          <p>
            My favorite food is my mom's pesto{" "}
            <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              (and I'm not just saying that because she'd come after me if I
              said anything else 🥶)
            </span>
          </p>
        </About>
        <h2>
          You can find me as <code>traviskaufman</code> on:
        </h2>
        <SocialLinks>
          <li>
            <SocialLink href="https://github.com/traviskaufman">
              <span role="presentation">
                <GithubIcon />
              </span>
              GitHub
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://twitter.com/traviskaufman">
              <span role="presentation">
                <TwitterIcon />
              </span>
              Twitter
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://medium.com/@traviskaufman">
              <span role="presentation">
                <MediumIcon />
              </span>
              Medium
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://www.linkedin.com/in/traviskaufman-thedeveloper/">
              <span role="presentation">
                <LinkedInIcon />
              </span>
              LinkedIn
            </SocialLink>
          </li>
          <li>
            <SocialLink href="/resume.pdf">
              <span role="presentation">
                <FileIcon />
              </span>
              My Résumé
            </SocialLink>
          </li>
        </SocialLinks>
      </BelowTheFold>
    </Main>
  );
}
