import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${theme.colors.text};
    }
  }

  .app {
    padding: 0 2rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }

  .header__logo {
    font-size: 2rem;
    font-weight: 700;
  }

  .header__nav-list {
    display: flex;
    list-style: none;
  }

  .header__nav-item {
    margin-left: 2rem;
  }

  .header__nav-link {
    font-size: 1.2rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }

  .footer__copy {
    font-size: 1rem;
  }

  .footer__socials {
    display: flex;
  }

  .footer__social-link {
    margin-left: 1rem;
    font-size: 1.2rem;
  }

  .project-card {
    position: relative;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }

  .project-card__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  .project-card__content {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: #fff;
  }

  .project-card__title {
    font-size: 2rem;
    font-weight: 700;
  }

  .project-card__description {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .project-card__tags {
    display: flex;
    margin-bottom: 1rem;
  }

  .project-card__tag {
    background: ${theme.colors.accent};
    color: ${theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-right: 1rem;
    font-size: 0.8rem;
  }

  .project-card__link {
    font-size: 1.2rem;
  }

  .project-details {
    display: flex;
    padding: 4rem 0;
  }

  .project-details__image {
    width: 50%;
    margin-right: 4rem;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .project-details__content {
    width: 50%;
  }

  .project-details__title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .project-details__description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .project-details__tags {
    display: flex;
    margin-bottom: 2rem;
  }

  .project-details__tag {
    background: ${theme.colors.accent};
    color: ${theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-right: 1rem;
    font-size: 1rem;
  }

  .project-details__link {
    font-size: 1.5rem;
  }

  .about {
    display: flex;
    padding: 4rem 0;
  }

  .about__content {
    width: 50%;
    margin-right: 4rem;
  }

  .about__title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .about__description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .about__image {
    width: 50%;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .contact {
    padding: 4rem 0;
  }

  .contact__content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .contact__title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .contact__description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .contact__email {
    font-size: 2rem;
    font-weight: 700;
  }

  .skills {
    padding: 4rem 0;
  }

  .skills__content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .skills__title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .skills__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .skills__item {
    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
    padding: 1rem 2rem;
    border-radius: 5px;
    margin: 1rem;
    font-size: 1.2rem;
  }

  .not-found {
    padding: 4rem 0;
    text-align: center;
  }

  .not-found__title {
    font-size: 8rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .not-found__description {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .not-found__link {
    font-size: 1.5rem;
  }
`;
