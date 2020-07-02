// Home Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Default Profile Picture Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// LinkedIn Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Channel Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Share Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Film Reel Icon in Upload Page made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

// Credits Page Icon made by < a href = "https://www.flaticon.com/authors/pixel-perfect" title = "Pixel perfect" > Pixel perfect</a > from < a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >
// GitHub Icon made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

// Menu Icon made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Thumbs Up/Down Icon made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

// Signout Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Upload Thumbnail Icon made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Magnifying Glass Icon made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Pictures Icon made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import React from "react";
import * as Icon from "../icons";

const CreditsPage = props => {
    return(
        <ul className="credit-list">
            <li><a href="https://www.flaticon.com/authors/freepik">{Icon.homeIcon(30)}Home Icon by Freepik</a></li>
            <li><a href="https://www.flaticon.com/authors/freepik">{Icon.profileIcon(30)}Profile Icon by Freepik</a></li>
            <li><a href="https://www.flaticon.com/authors/freepik">{Icon.linkedInIcon(30)}LinkedIn Icon by Freepik</a></li>
            <li><a href="https://www.flaticon.com/authors/freepik">{Icon.channelIcon(30)}Channel Icon by Freepik</a></li>
            <li><a href="https://www.flaticon.com/authors/freepik">{Icon.shareIcon(30)}Share Icon by Freepik</a></li>
            <li><a href="https://www.flaticon.com/authors/freepik">{Icon.uploadVideoIcon(30)}Film Reel Icon by Freepik</a></li>

            <li><a href="https://www.flaticon.com/authors/pixel-perfect">{Icon.creditsIcon(30)}Credits Icon by Pixel Perfect</a></li>
            <li><a href="https://www.flaticon.com/authors/pixel-perfect">{Icon.githubIcon(30)}GitHub Icon by Pixel Perfect</a></li>

            <li><a href="https://www.flaticon.com/authors/those-icons">{Icon.menuIcon(30)}Menu Icon by Those Icons</a></li>
            <li><a href="https://www.flaticon.com/authors/those-icons">{Icon.thumbsUpIcon(30)}Thumb Icon by Those Icons</a></li>

            <li><a href="https://www.flaticon.com/authors/smashicons">{Icon.exitIcon(30)}Signout Icon by Smashicons</a></li>
            <li><a href="https://www.flaticon.com/authors/kiranshastry">{Icon.uploadIcon(30)}Upload Video Icon by Kiranshastry</a></li>
            <li><a href="https://www.flaticon.com/authors/those-icons">{Icon.searchIcon(30)}Search Icon by Those Icons</a></li>
            <li><a href="https://www.flaticon.com/authors/srip">{Icon.uploadThumbnailIcon(30)}Thumbnail Icon by Srip</a></li>
            <li><a href="https://www.flaticon.com/authors/roundicons">{Icon.downArrowIcon(30)}Down Arrow Icon by Roundicons </a></li>
            <li><a href="https://www.flaticon.com/authors/roundicons">{Icon.upArrowIcon(30)}Up Arrow Icon from Roundicons</a> </li>
            <li><a href="https://www.flaticon.com/authors/google">{Icon.subscriptionIcon(30)}Subscription Icon from Google</a> </li>
        </ul>
    )
}
export default CreditsPage;