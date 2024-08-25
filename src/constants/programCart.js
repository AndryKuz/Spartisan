import {ReactComponent as Short} from '../assets/images/programIcon/1.svg';
import {ReactComponent as Deep} from '../assets/images/programIcon/2.svg';
import {ReactComponent as Steam} from '../assets/images/programIcon/3.svg';
import {ReactComponent as YourOwn} from '../assets/images/programIcon/4.svg';
import {ReactComponent as One} from '../assets/images/programIcon/5.svg';

export const nameButtonProgram = [
    {
        id: 1,
        title: "Short pleasure",
        price: 120,
        time: 120,
        program: [
            "3 visits to the bath",
            "Familiarization 12min",
            "Warming up and fanning for 12 minutes!",
            "Steaming 12 min per guest belly/back",
            "Water, tea!",
        ],
        color:'#1C1C1C',
        image: <Short/>
    },
    {
        id: 2,
        title: "Deep delight",
        price: 180,
        time: 120,
        program: [
            "4 visits to the steam room",
            "Warm up",
            "Fanning and poultice of the back and back of the legs,",
            "Scrub salt with honey",
            "Fanning and poultice of the abdomen and front of the legs",
            "Scrub honey, salt!",
            "Contrastn",
            "Soft soaring after contrast",
            "Warm bath and relaxation",
            "Water / tea",
        ],
        color:'#D8DAD4',
        image: <Deep/>
    },
    {
        id: 3,
        title: "Steam room",
        price: 120,
        time: 180,
        program: [
            "Warming up and familiarization apohalo, fan",
            "Fanning and poultice of the back and back of the legs, scrub salt with honey",
            "Scrub honey, salt!",
            "Fanning and poultice of the abdomen and front of the legs",
            "Contrast",
            "3 visits to the bath",
            "Familiarization 12min",
            "Warm bath and relaxation",
        ],
        color:'#896634',
        image: <Steam/>
    },
    {
        id: 4,
        title: "Your own bather",
        price: 120,
        time: 120,
        program: [
            "3 visits to the bath",
            "Familiarization 12min",
            "Warming up and fanning for 12 minutes!",
            "Steaming 12 min per guest belly/back",
            "Water, tea!",
        ],
        color:'#424A1B',
        image: <YourOwn/>
    },
    {
        id: 5,
        title: "One on one",
        price: 120,
        program: [
            "1 guest one parmaster",
            "Complete warm-up kit",
            "Scrubk",
            "Contrast",
            "Massage with a birch broom",
            "Water, tea of your choice!",
        ],
        color:'#120900',
        image: <One/>
    },
];