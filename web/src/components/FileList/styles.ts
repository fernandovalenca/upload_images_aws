import styled from 'styled-components';

export const Container = styled.ul`
    margin-top: 20px;
    
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;

        & + li {
            margin-top: 15px;
        }
    }
`;

export const FileInfo = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;

        span {
            display: flex;
            align-items: flex-end;
            font-size: 12px;
            color: #999;
            margin-top: 5px;
            
            button {
                border: 0;
                background: transparent;
                color: #e57878;
                margin-left: 5px;
            }
        }   
    }
`;

interface IPreviewProps {
    src?: string;
}

export const Preview = styled.div<IPreviewProps>`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 10px;
`;