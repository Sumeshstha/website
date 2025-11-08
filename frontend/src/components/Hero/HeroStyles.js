import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.colors.heroBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 24px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 80px;
  }
`;

export const HeroTextWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 24px;
  
  @media screen and (max-width: 768px) {
    padding-right: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 48px;
  margin-bottom: 16px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 18px;
  max-width: 600px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeroButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeroButton = styled(Link)`
  border-radius: 4px;
  background: ${({ primary, secondary, theme }) => 
    primary === 'true' ? theme.colors.buttonPrimary : 
    secondary === 'true' ? theme.colors.buttonSecondary : 
    'transparent'};
  white-space: nowrap;
  padding: ${({ secondary }) => secondary === 'true' ? '10px 32px' : '12px 32px'};
  color: ${({ primary, theme }) => 
    primary === 'true' ? theme.colors.buttonText : theme.colors.text};
  font-size: 16px;
  outline: none;
  border: ${({ primary, theme }) => 
    primary ? 'none' : `1px solid ${theme.colors.borderColor}`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  width: ${({ secondary }) => secondary ? '100%' : 'auto'};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary, theme }) => 
      primary ? theme.colors.primary : theme.colors.buttonPrimary};
    color: ${({ theme }) => theme.colors.buttonText};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }
`;

export const HeroImage = styled.img`
  flex: 1;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  object-fit: cover;
  
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
    max-width: 300px;
  }
`;