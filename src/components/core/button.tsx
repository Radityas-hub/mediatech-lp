export default function Button() {
    return (
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors duration-200">
            Button
            <img
                src="/arrow-icon.webp"
                alt="Arrow"
                className="w-4 h-4"
            />
        </button>
    )
}
