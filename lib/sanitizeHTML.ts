// utils/sanitizeHTML.js
import DOMPurify from "dompurify";

export function sanitizeHTML(htmlContent: any) {
	return DOMPurify.sanitize(htmlContent);
}