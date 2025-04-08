export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold tracking-wider">K·PORTFOLIO</h2>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} KALEB TESSEMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
