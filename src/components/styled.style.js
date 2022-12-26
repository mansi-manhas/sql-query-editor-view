import styled from "styled-components";

export const TableWrapper = styled.div`

margin-top: 4px;

.table {
  display: inline-block;
  border-spacing: 0;
  border: 2px solid rgba(224, 224, 224, 1);
  background-color: rgb(238, 242, 244);
  color: rgb(100, 118, 132);
  overflow: auto;
  width: 80vw;
  height: 40vh;
  overflow-y: hidden;

  .tr {
    cursor: pointer;
    :nth-child(even) {
        background-color: #fff;
    }
    :last-child {
      .td {
        border-bottom: 0;
      }
    }
  }

  .th,
  .td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    border-right: 1px solid rgba(224, 224, 224, 1);

    :last-child {
      border-right: 1px solid rgba(224, 224, 224, 1);
    }
  }

  .th {
    background-color: #fff;
    border-bottom: 2px solid rgba(224, 224, 224, 1);
   }
}
`;


export const ExecuteQueryButton = styled.button`
    cursor: pointer;
    color: rgb(100, 118, 132);
    padding: 4px;
    width: 100%;
    border: 1px solid #19857b;
    text-align: center;
    outline: none;
    font-size: 14px;
    display: block;
    background-color: ${props => props.customBgColor || 'rgba(224,224,224,1)'};
    margin-top: 4px;

    :active,
    :hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
`;

export const CollapsibleActiveButton = styled(ExecuteQueryButton)`
    background-color: rgba(0, 0, 0, 0.04);
    display: block;
`;

export const CollapsibleContent = styled.div`
    padding: 0 18px;
    overflow: hidden;
    color: rgb(100, 118, 132);
`;

export const Title = styled.h3`
  color: #647684;
  text-align: center;
`;


export const HeaderWrapper = styled.div`
    background-color: rgb(238, 242, 244);
    height: 40px;
    color: #647684;
    border-bottom: 2px solid rgba(224,224,224,1);
`;

export const HeaderText = styled.p`
    position: absolute;
    margin: auto;
    padding: 4px;
    top: 10px;
    font-weight: bold;
`;

export const SpinnerImage = styled.img`
  transform: translate(-50%, -50%);
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 50;
`;

export const SpinnerOverlay = styled.div`
  background-color: #fff;
  opacity: .6;
  height: 100%;
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 40;
`;