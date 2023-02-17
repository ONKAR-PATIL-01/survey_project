import React,{useState} from 'react';
import Tour from 'reactour';
import styled from 'styled-components';
const TourWrapper = styled.div`
  .reactour__mask {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  .reactour__helper {
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  }

  .reactour__close {
    color: #007aff;
  }

  .reactour__controls {
    .reactour__button {
      background-color: #007aff;
    }
  }
`;
const steps = [
    {
      selector: '',
      content: 'This is the navigation bar. You can use it to access different pages.',
    },
    {
      selector: '',
      content: ' You can create a new survey or view existing surveys from here.',
    },
    {
      selector: '',
      content: 'Click this button to create a new survey.',
    },
    {
      selector: '',
      content: 'This is the list of existing surveys. Click on a survey to view its details.',
    },
  ];
const SurveyTour = () => {
    const[isTourOpen,setIsTourOpen]=useState(true);
    const handleTourClose = () => {
        setIsTourOpen(false);
        localStorage.setItem('hasCompletedTour', 'true');
      };
    const hasCompletedTour = localStorage.getItem('hasCompletedTour');

  if (!hasCompletedTour) {
    // show the tour if the user has not completed it before
    return (
      <TourWrapper>
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={handleTourClose}
          showButtons={true}
          showNavigation={true}
          showCloseButton={true}
          disableDotsNavigation={false}
          disableInteraction={false}
          startAt={0}
          className="tour"
          accentColor="#007aff"
          closeWithMask={false}
        />
      </TourWrapper>
    );
  } else {
    // do not show the tour if the user has already completed it
    return null;
  }
};
export default SurveyTour;
