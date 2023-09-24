import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

export const Card = ({ colorId }) => {
    const [color, setColor] = useState("bg-accent");

    useEffect(() => { 
        switch (colorId) {
            case 0:
                setColor("bg-accent");
                break;
            case 1:
                setColor("bg-secondary");
                break;
            case 2:
                setColor("bg");
                break;
            case 3:
                setColor("bg-red");
                break;
        }
    }, []);

    return (
        <CardWrapper className={`br-1 ${color} c-pointer m-3`} />
    )
}

const CardWrapper = styled.div`
    width : 6rem;
    height : 6rem;
`;

Card.propTypes = {
    colorId : PropTypes.number
}