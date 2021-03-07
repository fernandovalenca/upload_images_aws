import styled, { css } from 'styled-components';

interface IDropContainer {
    isDragActive?: boolean;
    isDragReject?: boolean;
}

const dragActived = css`
    border-color: #78e5d5;
`;

const dragRejected = css`
    border-color: #e57878;
`;

export const DropContainer = styled.div<IDropContainer>`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2s ease;

    ${({ isDragActive }) => isDragActive && dragActived};
    ${({ isDragReject }) => isDragReject && dragRejected};
`;

interface ITypeMessageColor {
    color?: string;
}

export const UploadMessage = styled.div<ITypeMessageColor>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    color: ${({ color }) => color || '#000'};
`;