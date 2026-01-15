'use client';

export default function Footer() {
    return (
        <footer className="footer mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 bg-warmGray-900 rounded-md flex items-center justify-center">
                                <span className="text-cream font-bold text-xs">P</span>
                            </div>
                            <span className="text-base font-semibold text-warmGray-900">
                                PrompterBase
                            </span>
                        </div>
                        <p className="text-warmGray-500 text-sm leading-relaxed">
                            A curated collection of prompts for builders. Free and open source.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12">
                        <div>
                            <h4 className="text-xs font-medium uppercase tracking-wide text-warmGray-400 mb-3">Categories</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-warmGray-600 hover:text-warmGray-900 transition-colors">Website</a></li>
                                <li><a href="#" className="text-sm text-warmGray-600 hover:text-warmGray-900 transition-colors">Image</a></li>
                                <li><a href="#" className="text-sm text-warmGray-600 hover:text-warmGray-900 transition-colors">Video</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-medium uppercase tracking-wide text-warmGray-400 mb-3">Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://github.com/vedpawar2254/prompterbase"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-warmGray-600 hover:text-warmGray-900 transition-colors"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/vedpawar2254/prompterbase/issues"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-warmGray-600 hover:text-warmGray-900 transition-colors"
                                    >
                                        Contribute
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 pt-6 border-t border-warmGray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-warmGray-400 text-sm">
                        © 2025 PrompterBase. Open source.
                    </p>
                    <a
                        href="https://github.com/vedpawar2254/prompterbase"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warmGray-400 hover:text-warmGray-600 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
