import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 100px 0;
`;

export const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const SkillsHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 48px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-bottom: 64px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;

export const SkillCategory = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const SkillCategoryIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

export const SkillCategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const SkillList = styled.ul`
  list-style: none;
`;

export const SkillItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SkillRating = styled.div`
  display: flex;
  gap: 2px;
`;

export const SkillStar = styled.span`
  color: ${({ filled, theme }) => filled === 'true' ? theme.colors.primary : theme.colors.borderColor};
  font-size: 0.8rem;
  
  &:before {
    content: '★';
  }
`;

export const SkillDetailSection = styled.div`
  margin-top: 64px;
`;

export const DetailHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const DetailTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const DetailContent = styled.p`
  font-size: 0.9rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const TechItem = styled.span`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
`;