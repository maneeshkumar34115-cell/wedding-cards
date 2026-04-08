import { Phone, Share2 } from "lucide-react";
import Diya from "./Diya";

const WeddingFooter = () => {
  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "You're invited to the wedding of Shailendra Singh & Nikita! 💒\n📅 21st April 2026\n📍 Sahu Marriage Garden, Madawara, Lalitpur\n\nJoin us for this celebration of love!"
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <footer id="contact" className="py-16 px-4 indian-pattern-bg border-t border-primary/20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-6">
          <Diya />
          <Diya />
        </div>

        <p className="font-elegant text-xl text-secondary font-bold mb-2">
          Heart Invitation from the Rurya Family
        </p>


        <button
          onClick={shareOnWhatsApp}
          className="inline-flex items-center gap-2 bg-[#25D366] text-primary-foreground font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity mb-8"
        >
          <Share2 className="w-4 h-4" />
          Share on WhatsApp
        </button>

        <div className="h-px w-full bg-primary/10 mb-6" />
        <p className="text-xs text-muted-foreground">
          © 2026 Shailendra & Nikita Wedding. Made with ❤️
        </p>
      </div>
    </footer>
  );
};

export default WeddingFooter;
