import React, { useState } from 'react';
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
        content: 'If you dont see form Builder press ctrl+R or refresh the page.',
    },
    {
        selector: '',
        content: ' Create survey by dragging the components from left side.',
    },
    {
        selector: '',
        content: 'Add questions as label and placeholder to the components.',
    },
    {
        selector: '',
        content: 'After completing the form creation click on save on the left corner of draggable components.',
    },
    {
        selector: '',
        content: 'Add the title and click on save form .',
    },
    {
        selector: '',
        content: 'On dashboard you will find the form you have saved .',
    },
];
const SurveyTour1 = () => {
    const [isTourOpen, setIsTourOpen] = useState(true);
    const handleTourClose = () => {
        setIsTourOpen(false);
        localStorage.setItem('hasCompletedTour1', 'true');
    };
    const hasCompletedTour = localStorage.getItem('hasCompletedTour1');

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
export default SurveyTour1;
