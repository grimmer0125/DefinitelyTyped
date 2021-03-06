// Type definitions for dirty-chai 2.0
// Project: https://github.com/prodatakey/dirty-chai
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />
/// <reference types="chai-as-promised" />

declare global {
    namespace Chai {
        interface LanguageChains {
            always: Assertion;
        }

        interface Assertion {
            (message?: string): Assertion;
            ensure: Assertion;
        }

        interface PromisedAssertion extends Eventually, PromiseLike<any> {
            (message?: string): Assertion;
            ensure: Assertion;
        }
    }
}

declare function dirtyChai(chai: any, utils: any): void;
export = dirtyChai;
