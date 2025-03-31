export default function Footer(){
  return (
    <footer className="bg-white h-20 mt-5 flex items-center justify-center border border-b-0 border-l-0 border-r-0">
      <div>
        <p className="text-xs text-black">
        © {new Date().getFullYear()} SignEase</p>
      </div>
    </footer>
  );
};