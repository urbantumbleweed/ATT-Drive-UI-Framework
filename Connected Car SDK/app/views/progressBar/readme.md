# Progress bar

## Overview
Progress bars are used for graphical representation of elapsed data (time, usage, progress, etc).

## Appropriate Use
Use gray bar to display elapsed time and green bar for healthy status of progression (i.e.: data usage). Bar can show breaks inside a progress element (increments) if needed.

## Design Breakdown

## Placement
Block element with appropriate labels

## Variations
Progress bar color should change to indicate the importance of progress

- Progress `.bar` color is blue (default progress bar)
- Progress `.bar .success` color is green (healthy status)
- Progress `.bar .progress-warning` color changes to yellow and indicates a warning
- Progress `.bar .progress-danger` color changes to red and indicates danger or urgency
