# Modals

## Overview
Modals overlay the entire screen with a modal header, body content, and action buttons that are fixed at the bottom of the screen. Modal animations are predefined.

## Known issues
Excessive content that scrolls may not be evident to users because of how Android, iOS, and Windows Mobile hide the scrollbar by default. Screen readers may not scroll to the text that it is reading if the modal contains excessive text. Landscape mode does not have sufficient space to include a modal header, footer and body content. Therefore, it should not be treated as a normal view that the customer would use. We should assume the customer will rotate their device to portrait mode when a modal is displayed so they can view the information more easily. This is also a great reason why modals should not be used.
