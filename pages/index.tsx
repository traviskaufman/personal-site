import Image from "next/image";
import styled from "styled-components";
import TwitterIcon from "@fortawesome/fontawesome-free/svgs/brands/twitter.svg";
import LinkedInIcon from "@fortawesome/fontawesome-free/svgs/brands/linkedin.svg";
import GithubIcon from "@fortawesome/fontawesome-free/svgs/brands/github.svg";
import MediumIcon from "@fortawesome/fontawesome-free/svgs/brands/medium.svg";
import FileIcon from "@fortawesome/fontawesome-free/svgs/regular/file.svg";

const Headshot = styled.div`
  position: relative;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  overflow: hidden;
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

const Headline = styled.h1`
  --margin-pull: -0.55rem;
  margin-left: calc(var(--margin-pull) * -1);
  font-weight: 300;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (min-width: 980px) {
    strong {
      display: block;
      font-weight: 100;
      font-style: italic;
      font-size: 6rem;
      font-family: "Exo 2", sans-serif;
      text-align: left;
      line-height: 1.5;
      margin-left: var(--margin-pull);
    }
  }
`;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 5rem;
  display: grid;
  grid-template: minmax(40vh, auto) auto auto / 1fr 3fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 4rem;
  place-content: center;
  padding: 1rem;

  @media (max-width: 980px) {
    grid-row-gap: 2rem;
  }

  ${Headline} {
    grid-row: 1;
    grid-column: 2;
    align-self: center;

    @media (max-width: 980px) {
      grid-row: 2;
      grid-column: span 2;
    }
  }

  ${Headshot} {
    grid-row: 1;
    grid-column: 1;

    @media (max-width: 980px) {
      grid-column: span 2;
    }
  }

  ${SocialLinks} {
    grid-row: 3;
    grid-column: span 2;
  }
`;

const SocialLink = styled.a`
  --color: 32, 30, 32;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
  border: 1px solid rgb(var(--color));
  font-weight: 600;
  color: var(---color);
  text-decoration: none;
  outline-color: var(--color);
  position: relative;

  background-color: rgba(var(--color), 0);
  transition: background-color 100ms ease, color 100ms ease;
  &:hover,
  &:focus {
    background-color: rgba(var(--color), 1);
    color: white;
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
      <Headline>
        <strong>Travis Kaufman</strong> is a front-end developer from New York.
      </Headline>
      <Headshot>
        <Image layout="fill" src="/headshot.webp" alt="A headshot of Travis" />
      </Headshot>
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
            Résumé
          </SocialLink>
        </li>
      </SocialLinks>
    </Main>
  );
}
