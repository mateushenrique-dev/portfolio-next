import styled from "styled-components";

interface IHamburguerMenu {
  active: boolean;
  setActive: Function;
}

const HamburguerMenu = styled.div`
  button {
    background: ${({ theme }) => theme.colors.contrast};
    border: none;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.aux};

    padding: 4px 8px;
    border-radius: 4px;
  }
`;

function HamburguerMenuWrapper({ active, setActive }: IHamburguerMenu) {
  return (
    <HamburguerMenu>
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        Menu
      </button>
    </HamburguerMenu>
  );
}

export default HamburguerMenuWrapper;
