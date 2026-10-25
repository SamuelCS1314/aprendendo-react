import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fontawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a,z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24,)$/;

const Register = () => {
    const useRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    
    const [pwd, setPwd] = useState('');
    const [validPdw, setValidPdw] = useState(false);
    const [pdwFocus, setPdwFocus] = useState(false);
    
    const [matchPdw, setMatchPdw] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    

    return(
        <div>

        </div>
    )
}

export default Register;