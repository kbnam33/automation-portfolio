// This declaration file tells TypeScript what the `Cal` object looks like
// on the global `window` object. This will remove the errors in VS Code.

// By declaring this module, we can extend the global Window interface
// without polluting the global namespace directly.
declare global {
  interface Window {
    // This tells TypeScript that the window object can have a 'Cal' property,
    // and describes the function's signature.
    Cal: {
      (action: 'init', options?: { origin?: string }): void;
      (action: 'inline', options: { elementOrSelector: string | HTMLElement; calLink: string; layout?: string }): void;
      (action: 'ui', options: Record<string, any>): void;
      q?: IArguments[];
    };
  }
}

// We must export something to make this a module file.
export {};
