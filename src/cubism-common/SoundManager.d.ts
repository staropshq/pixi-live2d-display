export declare const VOLUME = 0.5;
/**
 * Manages all the sounds.
 */
export declare class SoundManager {
    /**
     * Audio elements playing or pending to play. Finished audios will be removed automatically.
     */
    static audios: HTMLAudioElement[];
    static analysers: AnalyserNode[];
    static contexts: AudioContext[];
    protected static _volume: number;
    /**
     * Global volume that applies to all the sounds.
     */
    static get volume(): number;
    static set volume(value: number);
    /**
     * Creates an audio element and adds it to the {@link audios}.
     * @param file - URL of the sound file.
     * @param onFinish - Callback invoked when the playback has finished.
     * @param onError - Callback invoked when error occurs.
     * @param crossOrigin - Cross origin setting.
     * @return Created audio element.
     */
    static add(file: string, onFinish?: () => void, onError?: (e: Error) => void, crossOrigin?: string): HTMLAudioElement;
    /**
     * Plays the sound.
     * @param audio - An audio element.
     * @return Promise that resolves when the audio is ready to play, rejects when error occurs.
     */
    static play(audio: HTMLAudioElement): Promise<void>;
    static addContext(audio: HTMLAudioElement): AudioContext;
    static addAnalyzer(audio: HTMLAudioElement, context: AudioContext): AnalyserNode;
    /**
     * Get volume for lip sync
     * @param analyser - An analyzer element.
     * @return Returns value to feed into lip sync
     */
    static analyze(analyser: AnalyserNode): number;
    /**
     * Disposes an audio element and removes it from {@link audios}.
     * @param audio - An audio element.
     */
    static dispose(audio: HTMLAudioElement): void;
    /**
     * Destroys all managed audios.
     */
    static destroy(): void;
}
