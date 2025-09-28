import type * as outputs from "./output";
export declare namespace hub {
    namespace v1alpha1 {
        /**
         * AIService is a Kubernetes-like Service to interact with a text-based LLM provider. It defines the parameters and credentials required to interact with various LLM providers.
         */
        interface AIService {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "AIService";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.AIServiceSpec;
        }
        /**
         * The desired behavior of this AIService.
         */
        interface AIServiceSpec {
            anthropic: outputs.hub.v1alpha1.AIServiceSpecAnthropic;
            azureOpenai: outputs.hub.v1alpha1.AIServiceSpecAzureOpenai;
            bedrock: outputs.hub.v1alpha1.AIServiceSpecBedrock;
            cohere: outputs.hub.v1alpha1.AIServiceSpecCohere;
            deepSeek: outputs.hub.v1alpha1.AIServiceSpecDeepSeek;
            gemini: outputs.hub.v1alpha1.AIServiceSpecGemini;
            mistral: outputs.hub.v1alpha1.AIServiceSpecMistral;
            ollama: outputs.hub.v1alpha1.AIServiceSpecOllama;
            openai: outputs.hub.v1alpha1.AIServiceSpecOpenai;
            qWen: outputs.hub.v1alpha1.AIServiceSpecQWen;
        }
        /**
         * Anthropic configures Anthropic backend.
         */
        interface AIServiceSpecAnthropic {
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecAnthropicParams;
            token: outputs.hub.v1alpha1.AIServiceSpecAnthropicToken;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecAnthropicParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecAnthropicParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Anthropic configures Anthropic backend.
         */
        interface AIServiceSpecAnthropicPatch {
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecAnthropicParamsPatch;
            token: outputs.hub.v1alpha1.AIServiceSpecAnthropicTokenPatch;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecAnthropicToken {
            secretName: string;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecAnthropicTokenPatch {
            secretName: string;
        }
        /**
         * AzureOpenAI configures AzureOpenAI.
         */
        interface AIServiceSpecAzureOpenai {
            apiKeySecret: outputs.hub.v1alpha1.AIServiceSpecAzureOpenaiApiKeySecret;
            baseUrl: string;
            deploymentName: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecAzureOpenaiParams;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecAzureOpenaiApiKeySecret {
            secretName: string;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecAzureOpenaiApiKeySecretPatch {
            secretName: string;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecAzureOpenaiParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecAzureOpenaiParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * AzureOpenAI configures AzureOpenAI.
         */
        interface AIServiceSpecAzureOpenaiPatch {
            apiKeySecret: outputs.hub.v1alpha1.AIServiceSpecAzureOpenaiApiKeySecretPatch;
            baseUrl: string;
            deploymentName: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecAzureOpenaiParamsPatch;
        }
        /**
         * Bedrock configures Bedrock backend.
         */
        interface AIServiceSpecBedrock {
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecBedrockParams;
            region: string;
            systemMessage: boolean;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecBedrockParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecBedrockParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Bedrock configures Bedrock backend.
         */
        interface AIServiceSpecBedrockPatch {
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecBedrockParamsPatch;
            region: string;
            systemMessage: boolean;
        }
        /**
         * Cohere configures Cohere backend.
         */
        interface AIServiceSpecCohere {
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecCohereParams;
            token: outputs.hub.v1alpha1.AIServiceSpecCohereToken;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecCohereParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecCohereParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Cohere configures Cohere backend.
         */
        interface AIServiceSpecCoherePatch {
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecCohereParamsPatch;
            token: outputs.hub.v1alpha1.AIServiceSpecCohereTokenPatch;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecCohereToken {
            secretName: string;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecCohereTokenPatch {
            secretName: string;
        }
        /**
         * DeepSeek configures DeepSeek.
         */
        interface AIServiceSpecDeepSeek {
            baseUrl: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecDeepSeekParams;
            token: outputs.hub.v1alpha1.AIServiceSpecDeepSeekToken;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecDeepSeekParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecDeepSeekParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * DeepSeek configures DeepSeek.
         */
        interface AIServiceSpecDeepSeekPatch {
            baseUrl: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecDeepSeekParamsPatch;
            token: outputs.hub.v1alpha1.AIServiceSpecDeepSeekTokenPatch;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecDeepSeekToken {
            secretName: string;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecDeepSeekTokenPatch {
            secretName: string;
        }
        /**
         * Gemini configures Gemini backend.
         */
        interface AIServiceSpecGemini {
            apiKey: outputs.hub.v1alpha1.AIServiceSpecGeminiApiKey;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecGeminiParams;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecGeminiApiKey {
            secretName: string;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecGeminiApiKeyPatch {
            secretName: string;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecGeminiParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecGeminiParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Gemini configures Gemini backend.
         */
        interface AIServiceSpecGeminiPatch {
            apiKey: outputs.hub.v1alpha1.AIServiceSpecGeminiApiKeyPatch;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecGeminiParamsPatch;
        }
        /**
         * Mistral configures Mistral AI backend.
         */
        interface AIServiceSpecMistral {
            apiKey: outputs.hub.v1alpha1.AIServiceSpecMistralApiKey;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecMistralParams;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecMistralApiKey {
            secretName: string;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecMistralApiKeyPatch {
            secretName: string;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecMistralParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecMistralParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Mistral configures Mistral AI backend.
         */
        interface AIServiceSpecMistralPatch {
            apiKey: outputs.hub.v1alpha1.AIServiceSpecMistralApiKeyPatch;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecMistralParamsPatch;
        }
        /**
         * Ollama configures Ollama backend.
         */
        interface AIServiceSpecOllama {
            baseUrl: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecOllamaParams;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecOllamaParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecOllamaParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Ollama configures Ollama backend.
         */
        interface AIServiceSpecOllamaPatch {
            baseUrl: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecOllamaParamsPatch;
        }
        /**
         * OpenAI configures OpenAI.
         */
        interface AIServiceSpecOpenai {
            baseUrl: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecOpenaiParams;
            token: outputs.hub.v1alpha1.AIServiceSpecOpenaiToken;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecOpenaiParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecOpenaiParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * OpenAI configures OpenAI.
         */
        interface AIServiceSpecOpenaiPatch {
            baseUrl: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecOpenaiParamsPatch;
            token: outputs.hub.v1alpha1.AIServiceSpecOpenaiTokenPatch;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecOpenaiToken {
            secretName: string;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecOpenaiTokenPatch {
            secretName: string;
        }
        /**
         * The desired behavior of this AIService.
         */
        interface AIServiceSpecPatch {
            anthropic: outputs.hub.v1alpha1.AIServiceSpecAnthropicPatch;
            azureOpenai: outputs.hub.v1alpha1.AIServiceSpecAzureOpenaiPatch;
            bedrock: outputs.hub.v1alpha1.AIServiceSpecBedrockPatch;
            cohere: outputs.hub.v1alpha1.AIServiceSpecCoherePatch;
            deepSeek: outputs.hub.v1alpha1.AIServiceSpecDeepSeekPatch;
            gemini: outputs.hub.v1alpha1.AIServiceSpecGeminiPatch;
            mistral: outputs.hub.v1alpha1.AIServiceSpecMistralPatch;
            ollama: outputs.hub.v1alpha1.AIServiceSpecOllamaPatch;
            openai: outputs.hub.v1alpha1.AIServiceSpecOpenaiPatch;
            qWen: outputs.hub.v1alpha1.AIServiceSpecQWenPatch;
        }
        /**
         * QWen configures QWen.
         */
        interface AIServiceSpecQWen {
            baseUrl: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecQWenParams;
            token: outputs.hub.v1alpha1.AIServiceSpecQWenToken;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecQWenParams {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * Params holds the LLM hyperparameters.
         */
        interface AIServiceSpecQWenParamsPatch {
            frequencyPenalty: number;
            maxTokens: number;
            presencePenalty: number;
            temperature: number;
            topP: number;
        }
        /**
         * QWen configures QWen.
         */
        interface AIServiceSpecQWenPatch {
            baseUrl: string;
            model: string;
            params: outputs.hub.v1alpha1.AIServiceSpecQWenParamsPatch;
            token: outputs.hub.v1alpha1.AIServiceSpecQWenTokenPatch;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecQWenToken {
            secretName: string;
        }
        /**
         * SecretReference references a kubernetes secret.
         */
        interface AIServiceSpecQWenTokenPatch {
            secretName: string;
        }
        /**
         * API defines an HTTP interface that is exposed to external clients. It specifies the supported versions
         * and provides instructions for accessing its documentation. Once instantiated, an API object is associated
         * with an Ingress, IngressRoute, or HTTPRoute resource, enabling the exposure of the described API to the outside world.
         */
        interface API {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "API";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APISpec;
            status: outputs.hub.v1alpha1.APIStatus;
        }
        /**
         * APIAuth defines the authentication configuration for APIs.
         */
        interface APIAuth {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "APIAuth";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APIAuthSpec;
            status: outputs.hub.v1alpha1.APIAuthStatus;
        }
        /**
         * The desired behavior of this APIAuth.
         */
        interface APIAuthSpec {
            /**
             * APIKey configures API key authentication.
             */
            apiKey: {
                [key: string]: any;
            };
            /**
             * IsDefault specifies if this APIAuth should be used as the default API authentication method for the namespace.
             * Only one APIAuth per namespace should have isDefault set to true.
             */
            isDefault: boolean;
            jwt: outputs.hub.v1alpha1.APIAuthSpecJwt;
        }
        /**
         * JWT configures JWT authentication.
         */
        interface APIAuthSpecJwt {
            /**
             * AppIDClaim is the name of the claim holding the identifier of the application.
             * This field is sometimes named `client_id`.
             */
            appIdClaim: string;
            /**
             * ForwardHeaders specifies additional headers to forward with the request.
             */
            forwardHeaders: {
                [key: string]: string;
            };
            /**
             * JWKSFile contains the JWKS file content for JWT verification.
             */
            jwksFile: string;
            /**
             * JWKSURL is the URL to fetch the JWKS for JWT verification.
             */
            jwksUrl: string;
            /**
             * PublicKey is the PEM-encoded public key for JWT verification.
             */
            publicKey: string;
            /**
             * SigningSecretName is the name of the Kubernetes Secret containing the signing secret.
             * The secret must be of type Opaque and contain a key named 'value'.
             */
            signingSecretName: string;
            /**
             * StripAuthorizationHeader determines whether to strip the Authorization header before forwarding the request.
             */
            stripAuthorizationHeader: boolean;
            /**
             * TokenNameClaim is the name of the claim holding the name of the token.
             * This name, if provided, will be used in the metrics.
             */
            tokenNameClaim: string;
            /**
             * TokenQueryKey specifies the query parameter name for the JWT token.
             */
            tokenQueryKey: string;
        }
        /**
         * JWT configures JWT authentication.
         */
        interface APIAuthSpecJwtPatch {
            /**
             * AppIDClaim is the name of the claim holding the identifier of the application.
             * This field is sometimes named `client_id`.
             */
            appIdClaim: string;
            /**
             * ForwardHeaders specifies additional headers to forward with the request.
             */
            forwardHeaders: {
                [key: string]: string;
            };
            /**
             * JWKSFile contains the JWKS file content for JWT verification.
             */
            jwksFile: string;
            /**
             * JWKSURL is the URL to fetch the JWKS for JWT verification.
             */
            jwksUrl: string;
            /**
             * PublicKey is the PEM-encoded public key for JWT verification.
             */
            publicKey: string;
            /**
             * SigningSecretName is the name of the Kubernetes Secret containing the signing secret.
             * The secret must be of type Opaque and contain a key named 'value'.
             */
            signingSecretName: string;
            /**
             * StripAuthorizationHeader determines whether to strip the Authorization header before forwarding the request.
             */
            stripAuthorizationHeader: boolean;
            /**
             * TokenNameClaim is the name of the claim holding the name of the token.
             * This name, if provided, will be used in the metrics.
             */
            tokenNameClaim: string;
            /**
             * TokenQueryKey specifies the query parameter name for the JWT token.
             */
            tokenQueryKey: string;
        }
        /**
         * The desired behavior of this APIAuth.
         */
        interface APIAuthSpecPatch {
            /**
             * APIKey configures API key authentication.
             */
            apiKey: {
                [key: string]: any;
            };
            /**
             * IsDefault specifies if this APIAuth should be used as the default API authentication method for the namespace.
             * Only one APIAuth per namespace should have isDefault set to true.
             */
            isDefault: boolean;
            jwt: outputs.hub.v1alpha1.APIAuthSpecJwtPatch;
        }
        /**
         * The current status of this APIAuth.
         */
        interface APIAuthStatus {
            /**
             * Hash is a hash representing the APIAuth.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this APIAuth.
         */
        interface APIAuthStatusPatch {
            /**
             * Hash is a hash representing the APIAuth.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * APIBundle defines a set of APIs.
         */
        interface APIBundle {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "APIBundle";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APIBundleSpec;
            status: outputs.hub.v1alpha1.APIBundleStatus;
        }
        /**
         * The desired behavior of this APIBundle.
         */
        interface APIBundleSpec {
            apiSelector: outputs.hub.v1alpha1.APIBundleSpecApiSelector;
            /**
             * APIs defines a set of APIs that will be accessible to the configured audience.
             * Multiple APIBundles can select the same APIs.
             * When combined with APISelector, this set of APIs is appended to the matching APIs.
             */
            apis: outputs.hub.v1alpha1.APIBundleSpecApis[];
            /**
             * Title is the human-readable name of the APIBundle that will be used on the portal.
             */
            title: string;
        }
        /**
         * APISelector selects the APIs that will be accessible to the configured audience.
         * Multiple APIBundles can select the same set of APIs.
         * This field is optional and follows standard label selector semantics.
         * An empty APISelector matches any API.
         */
        interface APIBundleSpecApiSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.hub.v1alpha1.APIBundleSpecApiSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface APIBundleSpecApiSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface APIBundleSpecApiSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * APISelector selects the APIs that will be accessible to the configured audience.
         * Multiple APIBundles can select the same set of APIs.
         * This field is optional and follows standard label selector semantics.
         * An empty APISelector matches any API.
         */
        interface APIBundleSpecApiSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.hub.v1alpha1.APIBundleSpecApiSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * APIReference references an API.
         */
        interface APIBundleSpecApis {
            /**
             * Name of the API.
             */
            name: string;
        }
        /**
         * APIReference references an API.
         */
        interface APIBundleSpecApisPatch {
            /**
             * Name of the API.
             */
            name: string;
        }
        /**
         * The desired behavior of this APIBundle.
         */
        interface APIBundleSpecPatch {
            apiSelector: outputs.hub.v1alpha1.APIBundleSpecApiSelectorPatch;
            /**
             * APIs defines a set of APIs that will be accessible to the configured audience.
             * Multiple APIBundles can select the same APIs.
             * When combined with APISelector, this set of APIs is appended to the matching APIs.
             */
            apis: outputs.hub.v1alpha1.APIBundleSpecApisPatch[];
            /**
             * Title is the human-readable name of the APIBundle that will be used on the portal.
             */
            title: string;
        }
        /**
         * The current status of this APIBundle.
         */
        interface APIBundleStatus {
            /**
             * Hash is a hash representing the APIBundle.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this APIBundle.
         */
        interface APIBundleStatusPatch {
            /**
             * Hash is a hash representing the APIBundle.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * APICatalogItem defines APIs that will be part of the API catalog on the portal.
         */
        interface APICatalogItem {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "APICatalogItem";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APICatalogItemSpec;
            status: outputs.hub.v1alpha1.APICatalogItemStatus;
        }
        /**
         * The desired behavior of this APICatalogItem.
         */
        interface APICatalogItemSpec {
            /**
             * APIBundles defines a set of APIBundle that will be visible to the configured audience.
             * Multiple APICatalogItem can select the same APIBundles.
             */
            apiBundles: outputs.hub.v1alpha1.APICatalogItemSpecApiBundles[];
            apiPlan: outputs.hub.v1alpha1.APICatalogItemSpecApiPlan;
            apiSelector: outputs.hub.v1alpha1.APICatalogItemSpecApiSelector;
            /**
             * APIs defines a set of APIs that will be visible to the configured audience.
             * Multiple APICatalogItem can select the same APIs.
             * When combined with APISelector, this set of APIs is appended to the matching APIs.
             */
            apis: outputs.hub.v1alpha1.APICatalogItemSpecApis[];
            /**
             * Everyone indicates that all users will see these APIs.
             */
            everyone: boolean;
            /**
             * Groups are the consumer groups that will see the APIs.
             */
            groups: string[];
            operationFilter: outputs.hub.v1alpha1.APICatalogItemSpecOperationFilter;
        }
        /**
         * APIBundleReference references an APIBundle.
         */
        interface APICatalogItemSpecApiBundles {
            /**
             * Name of the APIBundle.
             */
            name: string;
        }
        /**
         * APIBundleReference references an APIBundle.
         */
        interface APICatalogItemSpecApiBundlesPatch {
            /**
             * Name of the APIBundle.
             */
            name: string;
        }
        /**
         * APIPlan defines which APIPlan will be available.
         * If multiple APICatalogItem specify the same API with different APIPlan, the API consumer will be able to pick
         * a plan from this list.
         */
        interface APICatalogItemSpecApiPlan {
            /**
             * Name of the APIPlan.
             */
            name: string;
        }
        /**
         * APIPlan defines which APIPlan will be available.
         * If multiple APICatalogItem specify the same API with different APIPlan, the API consumer will be able to pick
         * a plan from this list.
         */
        interface APICatalogItemSpecApiPlanPatch {
            /**
             * Name of the APIPlan.
             */
            name: string;
        }
        /**
         * APISelector selects the APIs that will be visible to the configured audience.
         * Multiple APICatalogItem can select the same set of APIs.
         * This field is optional and follows standard label selector semantics.
         * An empty APISelector matches any API.
         */
        interface APICatalogItemSpecApiSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.hub.v1alpha1.APICatalogItemSpecApiSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface APICatalogItemSpecApiSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface APICatalogItemSpecApiSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * APISelector selects the APIs that will be visible to the configured audience.
         * Multiple APICatalogItem can select the same set of APIs.
         * This field is optional and follows standard label selector semantics.
         * An empty APISelector matches any API.
         */
        interface APICatalogItemSpecApiSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.hub.v1alpha1.APICatalogItemSpecApiSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * APIReference references an API.
         */
        interface APICatalogItemSpecApis {
            /**
             * Name of the API.
             */
            name: string;
        }
        /**
         * APIReference references an API.
         */
        interface APICatalogItemSpecApisPatch {
            /**
             * Name of the API.
             */
            name: string;
        }
        /**
         * OperationFilter specifies the visible operations on APIs and APIVersions.
         * If not set, all operations are available.
         * An empty OperationFilter prohibits all operations.
         */
        interface APICatalogItemSpecOperationFilter {
            /**
             * Include defines the names of OperationSets that will be accessible.
             */
            include: string[];
        }
        /**
         * OperationFilter specifies the visible operations on APIs and APIVersions.
         * If not set, all operations are available.
         * An empty OperationFilter prohibits all operations.
         */
        interface APICatalogItemSpecOperationFilterPatch {
            /**
             * Include defines the names of OperationSets that will be accessible.
             */
            include: string[];
        }
        /**
         * The desired behavior of this APICatalogItem.
         */
        interface APICatalogItemSpecPatch {
            /**
             * APIBundles defines a set of APIBundle that will be visible to the configured audience.
             * Multiple APICatalogItem can select the same APIBundles.
             */
            apiBundles: outputs.hub.v1alpha1.APICatalogItemSpecApiBundlesPatch[];
            apiPlan: outputs.hub.v1alpha1.APICatalogItemSpecApiPlanPatch;
            apiSelector: outputs.hub.v1alpha1.APICatalogItemSpecApiSelectorPatch;
            /**
             * APIs defines a set of APIs that will be visible to the configured audience.
             * Multiple APICatalogItem can select the same APIs.
             * When combined with APISelector, this set of APIs is appended to the matching APIs.
             */
            apis: outputs.hub.v1alpha1.APICatalogItemSpecApisPatch[];
            /**
             * Everyone indicates that all users will see these APIs.
             */
            everyone: boolean;
            /**
             * Groups are the consumer groups that will see the APIs.
             */
            groups: string[];
            operationFilter: outputs.hub.v1alpha1.APICatalogItemSpecOperationFilterPatch;
        }
        /**
         * The current status of this APICatalogItem.
         */
        interface APICatalogItemStatus {
            /**
             * Hash is a hash representing the APICatalogItem.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this APICatalogItem.
         */
        interface APICatalogItemStatusPatch {
            /**
             * Hash is a hash representing the APICatalogItem.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * APIPlan defines API Plan policy.
         */
        interface APIPlan {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "APIPlan";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APIPlanSpec;
            status: outputs.hub.v1alpha1.APIPlanStatus;
        }
        /**
         * The desired behavior of this APIPlan.
         */
        interface APIPlanSpec {
            /**
             * Description describes the plan.
             */
            description: string;
            quota: outputs.hub.v1alpha1.APIPlanSpecQuota;
            rateLimit: outputs.hub.v1alpha1.APIPlanSpecRateLimit;
            /**
             * Title is the human-readable name of the plan.
             */
            title: string;
        }
        /**
         * The desired behavior of this APIPlan.
         */
        interface APIPlanSpecPatch {
            /**
             * Description describes the plan.
             */
            description: string;
            quota: outputs.hub.v1alpha1.APIPlanSpecQuotaPatch;
            rateLimit: outputs.hub.v1alpha1.APIPlanSpecRateLimitPatch;
            /**
             * Title is the human-readable name of the plan.
             */
            title: string;
        }
        /**
         * Quota defines the quota policy.
         */
        interface APIPlanSpecQuota {
            /**
             * Limit is the maximum number of token in the bucket.
             */
            limit: number;
            /**
             * Period is the unit of time for the Limit.
             */
            period: string;
        }
        /**
         * Quota defines the quota policy.
         */
        interface APIPlanSpecQuotaPatch {
            /**
             * Limit is the maximum number of token in the bucket.
             */
            limit: number;
            /**
             * Period is the unit of time for the Limit.
             */
            period: string;
        }
        /**
         * RateLimit defines the rate limit policy.
         */
        interface APIPlanSpecRateLimit {
            /**
             * Limit is the maximum number of token in the bucket.
             */
            limit: number;
            /**
             * Period is the unit of time for the Limit.
             */
            period: string;
        }
        /**
         * RateLimit defines the rate limit policy.
         */
        interface APIPlanSpecRateLimitPatch {
            /**
             * Limit is the maximum number of token in the bucket.
             */
            limit: number;
            /**
             * Period is the unit of time for the Limit.
             */
            period: string;
        }
        /**
         * The current status of this APIPlan.
         */
        interface APIPlanStatus {
            /**
             * Hash is a hash representing the APIPlan.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this APIPlan.
         */
        interface APIPlanStatusPatch {
            /**
             * Hash is a hash representing the APIPlan.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * APIPortal defines a developer portal for accessing the documentation of APIs.
         */
        interface APIPortal {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "APIPortal";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APIPortalSpec;
            status: outputs.hub.v1alpha1.APIPortalStatus;
        }
        /**
         * APIPortalAuth defines the authentication configuration for an APIPortal.
         */
        interface APIPortalAuth {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "APIPortalAuth";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APIPortalAuthSpec;
            status: outputs.hub.v1alpha1.APIPortalAuthStatus;
        }
        /**
         * The desired behavior of this APIPortalAuth.
         */
        interface APIPortalAuthSpec {
            oidc: outputs.hub.v1alpha1.APIPortalAuthSpecOidc;
        }
        /**
         * OIDC configures the OIDC authentication.
         */
        interface APIPortalAuthSpecOidc {
            claims: outputs.hub.v1alpha1.APIPortalAuthSpecOidcClaims;
            /**
             * IssuerURL is the OIDC provider issuer URL.
             */
            issuerUrl: string;
            /**
             * Scopes is a list of OAuth2 scopes.
             */
            scopes: string[];
            /**
             * SecretName is the name of the Kubernetes Secret containing clientId and clientSecret keys.
             */
            secretName: string;
            /**
             * SyncedAttributes is a list of additional attributes to sync from the OIDC provider.
             * Each attribute must correspond to a configured claim field.
             */
            syncedAttributes: string[];
        }
        /**
         * Claims configures JWT claim mappings for user attributes.
         */
        interface APIPortalAuthSpecOidcClaims {
            /**
             * Company is the JWT claim for user company.
             */
            company: string;
            /**
             * Email is the JWT claim for user email.
             */
            email: string;
            /**
             * Firstname is the JWT claim for user first name.
             */
            firstname: string;
            /**
             * Groups is the JWT claim for user groups. This field is required for authorization.
             */
            groups: string;
            /**
             * Lastname is the JWT claim for user last name.
             */
            lastname: string;
            /**
             * UserID is the JWT claim for user ID mapping.
             */
            userId: string;
        }
        /**
         * Claims configures JWT claim mappings for user attributes.
         */
        interface APIPortalAuthSpecOidcClaimsPatch {
            /**
             * Company is the JWT claim for user company.
             */
            company: string;
            /**
             * Email is the JWT claim for user email.
             */
            email: string;
            /**
             * Firstname is the JWT claim for user first name.
             */
            firstname: string;
            /**
             * Groups is the JWT claim for user groups. This field is required for authorization.
             */
            groups: string;
            /**
             * Lastname is the JWT claim for user last name.
             */
            lastname: string;
            /**
             * UserID is the JWT claim for user ID mapping.
             */
            userId: string;
        }
        /**
         * OIDC configures the OIDC authentication.
         */
        interface APIPortalAuthSpecOidcPatch {
            claims: outputs.hub.v1alpha1.APIPortalAuthSpecOidcClaimsPatch;
            /**
             * IssuerURL is the OIDC provider issuer URL.
             */
            issuerUrl: string;
            /**
             * Scopes is a list of OAuth2 scopes.
             */
            scopes: string[];
            /**
             * SecretName is the name of the Kubernetes Secret containing clientId and clientSecret keys.
             */
            secretName: string;
            /**
             * SyncedAttributes is a list of additional attributes to sync from the OIDC provider.
             * Each attribute must correspond to a configured claim field.
             */
            syncedAttributes: string[];
        }
        /**
         * The desired behavior of this APIPortalAuth.
         */
        interface APIPortalAuthSpecPatch {
            oidc: outputs.hub.v1alpha1.APIPortalAuthSpecOidcPatch;
        }
        /**
         * The current status of this APIPortalAuth.
         */
        interface APIPortalAuthStatus {
            /**
             * Hash is a hash representing the APIPortalAuth.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this APIPortalAuth.
         */
        interface APIPortalAuthStatusPatch {
            /**
             * Hash is a hash representing the APIPortalAuth.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The desired behavior of this APIPortal.
         */
        interface APIPortalSpec {
            auth: outputs.hub.v1alpha1.APIPortalSpecAuth;
            /**
             * Description of the APIPortal.
             */
            description: string;
            /**
             * Title is the public facing name of the APIPortal.
             */
            title: string;
            /**
             * TrustedURLs are the urls that are trusted by the OAuth 2.0 authorization server.
             */
            trustedUrls: string[];
            ui: outputs.hub.v1alpha1.APIPortalSpecUi;
        }
        /**
         * Auth references the APIPortalAuth resource for authentication configuration.
         */
        interface APIPortalSpecAuth {
            /**
             * Name is the name of the APIPortalAuth resource.
             */
            name: string;
        }
        /**
         * Auth references the APIPortalAuth resource for authentication configuration.
         */
        interface APIPortalSpecAuthPatch {
            /**
             * Name is the name of the APIPortalAuth resource.
             */
            name: string;
        }
        /**
         * The desired behavior of this APIPortal.
         */
        interface APIPortalSpecPatch {
            auth: outputs.hub.v1alpha1.APIPortalSpecAuthPatch;
            /**
             * Description of the APIPortal.
             */
            description: string;
            /**
             * Title is the public facing name of the APIPortal.
             */
            title: string;
            /**
             * TrustedURLs are the urls that are trusted by the OAuth 2.0 authorization server.
             */
            trustedUrls: string[];
            ui: outputs.hub.v1alpha1.APIPortalSpecUiPatch;
        }
        /**
         * UI holds the UI customization options.
         */
        interface APIPortalSpecUi {
            /**
             * LogoURL is the public URL of the logo.
             */
            logoUrl: string;
        }
        /**
         * UI holds the UI customization options.
         */
        interface APIPortalSpecUiPatch {
            /**
             * LogoURL is the public URL of the logo.
             */
            logoUrl: string;
        }
        /**
         * The current status of this APIPortal.
         */
        interface APIPortalStatus {
            /**
             * Hash is a hash representing the APIPortal.
             */
            hash: string;
            oidc: outputs.hub.v1alpha1.APIPortalStatusOidc;
            syncedAt: string;
            version: string;
        }
        /**
         * OIDC is the OIDC configuration for accessing the exposed APIPortal WebUI.
         */
        interface APIPortalStatusOidc {
            /**
             * ClientID is the OIDC ClientID for accessing the exposed APIPortal WebUI.
             */
            clientId: string;
            /**
             * CompanyClaim is the name of the JWT claim containing the user company.
             */
            companyClaim: string;
            /**
             * EmailClaim is the name of the JWT claim containing the user email.
             */
            emailClaim: string;
            /**
             * FirstnameClaim is the name of the JWT claim containing the user firstname.
             */
            firstnameClaim: string;
            /**
             * Generic indicates whether or not the APIPortal authentication relies on Generic OIDC.
             */
            generic: boolean;
            /**
             * GroupsClaim is the name of the JWT claim containing the user groups.
             */
            groupsClaim: string;
            /**
             * Issuer is the OIDC issuer for accessing the exposed APIPortal WebUI.
             */
            issuer: string;
            /**
             * LastnameClaim is the name of the JWT claim containing the user lastname.
             */
            lastnameClaim: string;
            /**
             * Scopes is the OIDC scopes for getting user attributes during the authentication to the exposed APIPortal WebUI.
             */
            scopes: string;
            /**
             * SecretName is the name of the secret containing the OIDC ClientSecret for accessing the exposed APIPortal WebUI.
             */
            secretName: string;
            /**
             * SyncedAttributes configure the user attributes to sync.
             */
            syncedAttributes: string[];
            /**
             * UserIDClaim is the name of the JWT claim containing the user ID.
             */
            userIdClaim: string;
        }
        /**
         * OIDC is the OIDC configuration for accessing the exposed APIPortal WebUI.
         */
        interface APIPortalStatusOidcPatch {
            /**
             * ClientID is the OIDC ClientID for accessing the exposed APIPortal WebUI.
             */
            clientId: string;
            /**
             * CompanyClaim is the name of the JWT claim containing the user company.
             */
            companyClaim: string;
            /**
             * EmailClaim is the name of the JWT claim containing the user email.
             */
            emailClaim: string;
            /**
             * FirstnameClaim is the name of the JWT claim containing the user firstname.
             */
            firstnameClaim: string;
            /**
             * Generic indicates whether or not the APIPortal authentication relies on Generic OIDC.
             */
            generic: boolean;
            /**
             * GroupsClaim is the name of the JWT claim containing the user groups.
             */
            groupsClaim: string;
            /**
             * Issuer is the OIDC issuer for accessing the exposed APIPortal WebUI.
             */
            issuer: string;
            /**
             * LastnameClaim is the name of the JWT claim containing the user lastname.
             */
            lastnameClaim: string;
            /**
             * Scopes is the OIDC scopes for getting user attributes during the authentication to the exposed APIPortal WebUI.
             */
            scopes: string;
            /**
             * SecretName is the name of the secret containing the OIDC ClientSecret for accessing the exposed APIPortal WebUI.
             */
            secretName: string;
            /**
             * SyncedAttributes configure the user attributes to sync.
             */
            syncedAttributes: string[];
            /**
             * UserIDClaim is the name of the JWT claim containing the user ID.
             */
            userIdClaim: string;
        }
        /**
         * The current status of this APIPortal.
         */
        interface APIPortalStatusPatch {
            /**
             * Hash is a hash representing the APIPortal.
             */
            hash: string;
            oidc: outputs.hub.v1alpha1.APIPortalStatusOidcPatch;
            syncedAt: string;
            version: string;
        }
        /**
         * APIRateLimit defines how group of consumers are rate limited on a set of APIs.
         */
        interface APIRateLimit {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "APIRateLimit";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APIRateLimitSpec;
            status: outputs.hub.v1alpha1.APIRateLimitStatus;
        }
        /**
         * The desired behavior of this APIRateLimit.
         */
        interface APIRateLimitSpec {
            apiSelector: outputs.hub.v1alpha1.APIRateLimitSpecApiSelector;
            /**
             * APIs defines a set of APIs that will be rate limited.
             * Multiple APIRateLimits can select the same APIs.
             * When combined with APISelector, this set of APIs is appended to the matching APIs.
             */
            apis: outputs.hub.v1alpha1.APIRateLimitSpecApis[];
            /**
             * Everyone indicates that all users will, by default, be rate limited with this configuration.
             * If an APIRateLimit explicitly target a group, the default rate limit will be ignored.
             */
            everyone: boolean;
            /**
             * Groups are the consumer groups that will be rate limited.
             * Multiple APIRateLimits can target the same set of consumer groups, the most restrictive one applies.
             * When a consumer belongs to multiple groups, the least restrictive APIRateLimit applies.
             */
            groups: string[];
            /**
             * Limit is the maximum number of token in the bucket.
             */
            limit: number;
            /**
             * Period is the unit of time for the Limit.
             */
            period: string;
            /**
             * Strategy defines how the bucket state will be synchronized between the different Traefik Hub instances.
             * It can be, either "local" or "distributed".
             */
            strategy: string;
        }
        /**
         * APISelector selects the APIs that will be rate limited.
         * Multiple APIRateLimits can select the same set of APIs.
         * This field is optional and follows standard label selector semantics.
         * An empty APISelector matches any API.
         */
        interface APIRateLimitSpecApiSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.hub.v1alpha1.APIRateLimitSpecApiSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface APIRateLimitSpecApiSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface APIRateLimitSpecApiSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * APISelector selects the APIs that will be rate limited.
         * Multiple APIRateLimits can select the same set of APIs.
         * This field is optional and follows standard label selector semantics.
         * An empty APISelector matches any API.
         */
        interface APIRateLimitSpecApiSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.hub.v1alpha1.APIRateLimitSpecApiSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * APIReference references an API.
         */
        interface APIRateLimitSpecApis {
            /**
             * Name of the API.
             */
            name: string;
        }
        /**
         * APIReference references an API.
         */
        interface APIRateLimitSpecApisPatch {
            /**
             * Name of the API.
             */
            name: string;
        }
        /**
         * The desired behavior of this APIRateLimit.
         */
        interface APIRateLimitSpecPatch {
            apiSelector: outputs.hub.v1alpha1.APIRateLimitSpecApiSelectorPatch;
            /**
             * APIs defines a set of APIs that will be rate limited.
             * Multiple APIRateLimits can select the same APIs.
             * When combined with APISelector, this set of APIs is appended to the matching APIs.
             */
            apis: outputs.hub.v1alpha1.APIRateLimitSpecApisPatch[];
            /**
             * Everyone indicates that all users will, by default, be rate limited with this configuration.
             * If an APIRateLimit explicitly target a group, the default rate limit will be ignored.
             */
            everyone: boolean;
            /**
             * Groups are the consumer groups that will be rate limited.
             * Multiple APIRateLimits can target the same set of consumer groups, the most restrictive one applies.
             * When a consumer belongs to multiple groups, the least restrictive APIRateLimit applies.
             */
            groups: string[];
            /**
             * Limit is the maximum number of token in the bucket.
             */
            limit: number;
            /**
             * Period is the unit of time for the Limit.
             */
            period: string;
            /**
             * Strategy defines how the bucket state will be synchronized between the different Traefik Hub instances.
             * It can be, either "local" or "distributed".
             */
            strategy: string;
        }
        /**
         * The current status of this APIRateLimit.
         */
        interface APIRateLimitStatus {
            /**
             * Hash is a hash representing the APIRateLimit.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this APIRateLimit.
         */
        interface APIRateLimitStatusPatch {
            /**
             * Hash is a hash representing the APIRateLimit.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * APISpec describes the API.
         */
        interface APISpec {
            cors: outputs.hub.v1alpha1.APISpecCors;
            /**
             * Description explains what the API does.
             */
            description: string;
            openApiSpec: outputs.hub.v1alpha1.APISpecOpenApiSpec;
            /**
             * Title is the human-readable name of the API that will be used on the portal.
             */
            title: string;
            /**
             * Versions are the different APIVersions available.
             */
            versions: outputs.hub.v1alpha1.APISpecVersions[];
        }
        /**
         * Cors defines the Cross-Origin Resource Sharing configuration.
         */
        interface APISpecCors {
            /**
             * AddVaryHeader defines whether the Vary header is automatically added/updated when the AllowOriginsList is set.
             */
            addVaryHeader: boolean;
            /**
             * AllowCredentials defines whether the request can include user credentials.
             */
            allowCredentials: boolean;
            /**
             * AllowHeadersList defines the Access-Control-Request-Headers values sent in preflight response.
             */
            allowHeadersList: string[];
            /**
             * AllowMethodsList defines the Access-Control-Request-Method values sent in preflight response.
             */
            allowMethodsList: string[];
            /**
             * AllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).
             */
            allowOriginListRegex: string[];
            /**
             * AllowOriginsList is a list of allowable origins. Can also be a wildcard origin "*".
             */
            allowOriginsList: string[];
            /**
             * ExposeHeadersList defines the Access-Control-Expose-Headers values sent in preflight response.
             */
            exposeHeadersList: string[];
            /**
             * MaxAge defines the time that a preflight request may be cached.
             */
            maxAge: number;
        }
        /**
         * Cors defines the Cross-Origin Resource Sharing configuration.
         */
        interface APISpecCorsPatch {
            /**
             * AddVaryHeader defines whether the Vary header is automatically added/updated when the AllowOriginsList is set.
             */
            addVaryHeader: boolean;
            /**
             * AllowCredentials defines whether the request can include user credentials.
             */
            allowCredentials: boolean;
            /**
             * AllowHeadersList defines the Access-Control-Request-Headers values sent in preflight response.
             */
            allowHeadersList: string[];
            /**
             * AllowMethodsList defines the Access-Control-Request-Method values sent in preflight response.
             */
            allowMethodsList: string[];
            /**
             * AllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).
             */
            allowOriginListRegex: string[];
            /**
             * AllowOriginsList is a list of allowable origins. Can also be a wildcard origin "*".
             */
            allowOriginsList: string[];
            /**
             * ExposeHeadersList defines the Access-Control-Expose-Headers values sent in preflight response.
             */
            exposeHeadersList: string[];
            /**
             * MaxAge defines the time that a preflight request may be cached.
             */
            maxAge: number;
        }
        /**
         * OpenAPISpec defines the API contract as an OpenAPI specification.
         */
        interface APISpecOpenApiSpec {
            /**
             * OperationSets defines the sets of operations to be referenced for granular filtering in APICatalogItems or ManagedSubscriptions.
             */
            operationSets: outputs.hub.v1alpha1.APISpecOpenApiSpecOperationSets[];
            override: outputs.hub.v1alpha1.APISpecOpenApiSpecOverride;
            /**
             * Path specifies the endpoint path within the Kubernetes Service where the OpenAPI specification can be obtained.
             * The Service queried is determined by the associated Ingress, IngressRoute, or HTTPRoute resource to which the API is attached.
             * It's important to note that this option is incompatible if the Ingress or IngressRoute specifies multiple backend services.
             * The Path must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.
             */
            path: string;
            /**
             * URL is a Traefik Hub agent accessible URL for obtaining the OpenAPI specification.
             * The URL must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.
             */
            url: string;
            /**
             * ValidateRequestMethodAndPath validates that the path and method matches an operation defined in the OpenAPI specification.
             * This option overrides the default behavior configured in the static configuration.
             */
            validateRequestMethodAndPath: boolean;
        }
        /**
         * OperationSet gives a name to a set of matching OpenAPI operations.
         * This set of operations can then be referenced for granular filtering in APICatalogItems or ManagedSubscriptions.
         */
        interface APISpecOpenApiSpecOperationSets {
            /**
             * Matchers defines a list of alternative rules for matching OpenAPI operations.
             */
            matchers: outputs.hub.v1alpha1.APISpecOpenApiSpecOperationSetsMatchers[];
            /**
             * Name is the name of the OperationSet to reference in APICatalogItems or ManagedSubscriptions.
             */
            name: string;
        }
        /**
         * OperationMatcher defines criteria for matching an OpenAPI operation.
         */
        interface APISpecOpenApiSpecOperationSetsMatchers {
            /**
             * Methods specifies the HTTP methods to be included for selection.
             */
            methods: string[];
            /**
             * Path specifies the exact path of the operations to select.
             */
            path: string;
            /**
             * PathPrefix specifies the path prefix of the operations to select.
             */
            pathPrefix: string;
            /**
             * PathRegex specifies a regular expression pattern for matching operations based on their paths.
             */
            pathRegex: string;
        }
        /**
         * OperationMatcher defines criteria for matching an OpenAPI operation.
         */
        interface APISpecOpenApiSpecOperationSetsMatchersPatch {
            /**
             * Methods specifies the HTTP methods to be included for selection.
             */
            methods: string[];
            /**
             * Path specifies the exact path of the operations to select.
             */
            path: string;
            /**
             * PathPrefix specifies the path prefix of the operations to select.
             */
            pathPrefix: string;
            /**
             * PathRegex specifies a regular expression pattern for matching operations based on their paths.
             */
            pathRegex: string;
        }
        /**
         * OperationSet gives a name to a set of matching OpenAPI operations.
         * This set of operations can then be referenced for granular filtering in APICatalogItems or ManagedSubscriptions.
         */
        interface APISpecOpenApiSpecOperationSetsPatch {
            /**
             * Matchers defines a list of alternative rules for matching OpenAPI operations.
             */
            matchers: outputs.hub.v1alpha1.APISpecOpenApiSpecOperationSetsMatchersPatch[];
            /**
             * Name is the name of the OperationSet to reference in APICatalogItems or ManagedSubscriptions.
             */
            name: string;
        }
        /**
         * Override holds data used to override OpenAPI specification.
         */
        interface APISpecOpenApiSpecOverride {
            servers: outputs.hub.v1alpha1.APISpecOpenApiSpecOverrideServers[];
        }
        /**
         * Override holds data used to override OpenAPI specification.
         */
        interface APISpecOpenApiSpecOverridePatch {
            servers: outputs.hub.v1alpha1.APISpecOpenApiSpecOverrideServersPatch[];
        }
        interface APISpecOpenApiSpecOverrideServers {
            url: string;
        }
        interface APISpecOpenApiSpecOverrideServersPatch {
            url: string;
        }
        /**
         * OpenAPISpec defines the API contract as an OpenAPI specification.
         */
        interface APISpecOpenApiSpecPatch {
            /**
             * OperationSets defines the sets of operations to be referenced for granular filtering in APICatalogItems or ManagedSubscriptions.
             */
            operationSets: outputs.hub.v1alpha1.APISpecOpenApiSpecOperationSetsPatch[];
            override: outputs.hub.v1alpha1.APISpecOpenApiSpecOverridePatch;
            /**
             * Path specifies the endpoint path within the Kubernetes Service where the OpenAPI specification can be obtained.
             * The Service queried is determined by the associated Ingress, IngressRoute, or HTTPRoute resource to which the API is attached.
             * It's important to note that this option is incompatible if the Ingress or IngressRoute specifies multiple backend services.
             * The Path must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.
             */
            path: string;
            /**
             * URL is a Traefik Hub agent accessible URL for obtaining the OpenAPI specification.
             * The URL must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.
             */
            url: string;
            /**
             * ValidateRequestMethodAndPath validates that the path and method matches an operation defined in the OpenAPI specification.
             * This option overrides the default behavior configured in the static configuration.
             */
            validateRequestMethodAndPath: boolean;
        }
        /**
         * APISpec describes the API.
         */
        interface APISpecPatch {
            cors: outputs.hub.v1alpha1.APISpecCorsPatch;
            /**
             * Description explains what the API does.
             */
            description: string;
            openApiSpec: outputs.hub.v1alpha1.APISpecOpenApiSpecPatch;
            /**
             * Title is the human-readable name of the API that will be used on the portal.
             */
            title: string;
            /**
             * Versions are the different APIVersions available.
             */
            versions: outputs.hub.v1alpha1.APISpecVersionsPatch[];
        }
        /**
         * APIVersionRef references an APIVersion.
         */
        interface APISpecVersions {
            /**
             * Name of the APIVersion.
             */
            name: string;
        }
        /**
         * APIVersionRef references an APIVersion.
         */
        interface APISpecVersionsPatch {
            /**
             * Name of the APIVersion.
             */
            name: string;
        }
        /**
         * The current status of this API.
         */
        interface APIStatus {
            /**
             * Hash is a hash representing the API.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this API.
         */
        interface APIStatusPatch {
            /**
             * Hash is a hash representing the API.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * APIVersion defines a version of an API.
         */
        interface APIVersion {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "APIVersion";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.APIVersionSpec;
            status: outputs.hub.v1alpha1.APIVersionStatus;
        }
        /**
         * The desired behavior of this APIVersion.
         */
        interface APIVersionSpec {
            cors: outputs.hub.v1alpha1.APIVersionSpecCors;
            /**
             * Description explains what the APIVersion does.
             */
            description: string;
            openApiSpec: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpec;
            /**
             * Release is the version number of the API.
             * This value must follow the SemVer format: https://semver.org/
             */
            release: string;
            /**
             * Title is the public facing name of the APIVersion.
             */
            title: string;
        }
        /**
         * Cors defines the Cross-Origin Resource Sharing configuration.
         */
        interface APIVersionSpecCors {
            /**
             * AddVaryHeader defines whether the Vary header is automatically added/updated when the AllowOriginsList is set.
             */
            addVaryHeader: boolean;
            /**
             * AllowCredentials defines whether the request can include user credentials.
             */
            allowCredentials: boolean;
            /**
             * AllowHeadersList defines the Access-Control-Request-Headers values sent in preflight response.
             */
            allowHeadersList: string[];
            /**
             * AllowMethodsList defines the Access-Control-Request-Method values sent in preflight response.
             */
            allowMethodsList: string[];
            /**
             * AllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).
             */
            allowOriginListRegex: string[];
            /**
             * AllowOriginsList is a list of allowable origins. Can also be a wildcard origin "*".
             */
            allowOriginsList: string[];
            /**
             * ExposeHeadersList defines the Access-Control-Expose-Headers values sent in preflight response.
             */
            exposeHeadersList: string[];
            /**
             * MaxAge defines the time that a preflight request may be cached.
             */
            maxAge: number;
        }
        /**
         * Cors defines the Cross-Origin Resource Sharing configuration.
         */
        interface APIVersionSpecCorsPatch {
            /**
             * AddVaryHeader defines whether the Vary header is automatically added/updated when the AllowOriginsList is set.
             */
            addVaryHeader: boolean;
            /**
             * AllowCredentials defines whether the request can include user credentials.
             */
            allowCredentials: boolean;
            /**
             * AllowHeadersList defines the Access-Control-Request-Headers values sent in preflight response.
             */
            allowHeadersList: string[];
            /**
             * AllowMethodsList defines the Access-Control-Request-Method values sent in preflight response.
             */
            allowMethodsList: string[];
            /**
             * AllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).
             */
            allowOriginListRegex: string[];
            /**
             * AllowOriginsList is a list of allowable origins. Can also be a wildcard origin "*".
             */
            allowOriginsList: string[];
            /**
             * ExposeHeadersList defines the Access-Control-Expose-Headers values sent in preflight response.
             */
            exposeHeadersList: string[];
            /**
             * MaxAge defines the time that a preflight request may be cached.
             */
            maxAge: number;
        }
        /**
         * OpenAPISpec defines the API contract as an OpenAPI specification.
         */
        interface APIVersionSpecOpenApiSpec {
            /**
             * OperationSets defines the sets of operations to be referenced for granular filtering in APICatalogItems or ManagedSubscriptions.
             */
            operationSets: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecOperationSets[];
            override: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecOverride;
            /**
             * Path specifies the endpoint path within the Kubernetes Service where the OpenAPI specification can be obtained.
             * The Service queried is determined by the associated Ingress, IngressRoute, or HTTPRoute resource to which the API is attached.
             * It's important to note that this option is incompatible if the Ingress or IngressRoute specifies multiple backend services.
             * The Path must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.
             */
            path: string;
            /**
             * URL is a Traefik Hub agent accessible URL for obtaining the OpenAPI specification.
             * The URL must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.
             */
            url: string;
            /**
             * ValidateRequestMethodAndPath validates that the path and method matches an operation defined in the OpenAPI specification.
             * This option overrides the default behavior configured in the static configuration.
             */
            validateRequestMethodAndPath: boolean;
        }
        /**
         * OperationSet gives a name to a set of matching OpenAPI operations.
         * This set of operations can then be referenced for granular filtering in APICatalogItems or ManagedSubscriptions.
         */
        interface APIVersionSpecOpenApiSpecOperationSets {
            /**
             * Matchers defines a list of alternative rules for matching OpenAPI operations.
             */
            matchers: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecOperationSetsMatchers[];
            /**
             * Name is the name of the OperationSet to reference in APICatalogItems or ManagedSubscriptions.
             */
            name: string;
        }
        /**
         * OperationMatcher defines criteria for matching an OpenAPI operation.
         */
        interface APIVersionSpecOpenApiSpecOperationSetsMatchers {
            /**
             * Methods specifies the HTTP methods to be included for selection.
             */
            methods: string[];
            /**
             * Path specifies the exact path of the operations to select.
             */
            path: string;
            /**
             * PathPrefix specifies the path prefix of the operations to select.
             */
            pathPrefix: string;
            /**
             * PathRegex specifies a regular expression pattern for matching operations based on their paths.
             */
            pathRegex: string;
        }
        /**
         * OperationMatcher defines criteria for matching an OpenAPI operation.
         */
        interface APIVersionSpecOpenApiSpecOperationSetsMatchersPatch {
            /**
             * Methods specifies the HTTP methods to be included for selection.
             */
            methods: string[];
            /**
             * Path specifies the exact path of the operations to select.
             */
            path: string;
            /**
             * PathPrefix specifies the path prefix of the operations to select.
             */
            pathPrefix: string;
            /**
             * PathRegex specifies a regular expression pattern for matching operations based on their paths.
             */
            pathRegex: string;
        }
        /**
         * OperationSet gives a name to a set of matching OpenAPI operations.
         * This set of operations can then be referenced for granular filtering in APICatalogItems or ManagedSubscriptions.
         */
        interface APIVersionSpecOpenApiSpecOperationSetsPatch {
            /**
             * Matchers defines a list of alternative rules for matching OpenAPI operations.
             */
            matchers: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecOperationSetsMatchersPatch[];
            /**
             * Name is the name of the OperationSet to reference in APICatalogItems or ManagedSubscriptions.
             */
            name: string;
        }
        /**
         * Override holds data used to override OpenAPI specification.
         */
        interface APIVersionSpecOpenApiSpecOverride {
            servers: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecOverrideServers[];
        }
        /**
         * Override holds data used to override OpenAPI specification.
         */
        interface APIVersionSpecOpenApiSpecOverridePatch {
            servers: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecOverrideServersPatch[];
        }
        interface APIVersionSpecOpenApiSpecOverrideServers {
            url: string;
        }
        interface APIVersionSpecOpenApiSpecOverrideServersPatch {
            url: string;
        }
        /**
         * OpenAPISpec defines the API contract as an OpenAPI specification.
         */
        interface APIVersionSpecOpenApiSpecPatch {
            /**
             * OperationSets defines the sets of operations to be referenced for granular filtering in APICatalogItems or ManagedSubscriptions.
             */
            operationSets: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecOperationSetsPatch[];
            override: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecOverridePatch;
            /**
             * Path specifies the endpoint path within the Kubernetes Service where the OpenAPI specification can be obtained.
             * The Service queried is determined by the associated Ingress, IngressRoute, or HTTPRoute resource to which the API is attached.
             * It's important to note that this option is incompatible if the Ingress or IngressRoute specifies multiple backend services.
             * The Path must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.
             */
            path: string;
            /**
             * URL is a Traefik Hub agent accessible URL for obtaining the OpenAPI specification.
             * The URL must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.
             */
            url: string;
            /**
             * ValidateRequestMethodAndPath validates that the path and method matches an operation defined in the OpenAPI specification.
             * This option overrides the default behavior configured in the static configuration.
             */
            validateRequestMethodAndPath: boolean;
        }
        /**
         * The desired behavior of this APIVersion.
         */
        interface APIVersionSpecPatch {
            cors: outputs.hub.v1alpha1.APIVersionSpecCorsPatch;
            /**
             * Description explains what the APIVersion does.
             */
            description: string;
            openApiSpec: outputs.hub.v1alpha1.APIVersionSpecOpenApiSpecPatch;
            /**
             * Release is the version number of the API.
             * This value must follow the SemVer format: https://semver.org/
             */
            release: string;
            /**
             * Title is the public facing name of the APIVersion.
             */
            title: string;
        }
        /**
         * The current status of this APIVersion.
         */
        interface APIVersionStatus {
            /**
             * Hash is a hash representing the APIVersion.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this APIVersion.
         */
        interface APIVersionStatusPatch {
            /**
             * Hash is a hash representing the APIVersion.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * ManagedApplication represents a managed application.
         */
        interface ManagedApplication {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ManagedApplication";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.ManagedApplicationSpec;
            status: outputs.hub.v1alpha1.ManagedApplicationStatus;
        }
        /**
         * ManagedApplicationSpec describes the ManagedApplication.
         */
        interface ManagedApplicationSpec {
            /**
             * APIKeys references the API keys used to authenticate the application when calling APIs.
             */
            apiKeys: outputs.hub.v1alpha1.ManagedApplicationSpecApiKeys[];
            /**
             * AppID is the identifier of the ManagedApplication.
             * It should be unique.
             */
            appId: string;
            /**
             * Notes contains notes about application.
             */
            notes: string;
            /**
             * Owner represents the owner of the ManagedApplication.
             * It should be:
             * - `sub` when using OIDC
             * - `externalID` when using external IDP
             */
            owner: string;
        }
        interface ManagedApplicationSpecApiKeys {
            /**
             * SecretName references the name of the secret containing the API key.
             */
            secretName: string;
            suspended: boolean;
            title: string;
            /**
             * Value is the API key value.
             */
            value: string;
        }
        interface ManagedApplicationSpecApiKeysPatch {
            /**
             * SecretName references the name of the secret containing the API key.
             */
            secretName: string;
            suspended: boolean;
            title: string;
            /**
             * Value is the API key value.
             */
            value: string;
        }
        /**
         * ManagedApplicationSpec describes the ManagedApplication.
         */
        interface ManagedApplicationSpecPatch {
            /**
             * APIKeys references the API keys used to authenticate the application when calling APIs.
             */
            apiKeys: outputs.hub.v1alpha1.ManagedApplicationSpecApiKeysPatch[];
            /**
             * AppID is the identifier of the ManagedApplication.
             * It should be unique.
             */
            appId: string;
            /**
             * Notes contains notes about application.
             */
            notes: string;
            /**
             * Owner represents the owner of the ManagedApplication.
             * It should be:
             * - `sub` when using OIDC
             * - `externalID` when using external IDP
             */
            owner: string;
        }
        /**
         * The current status of this ManagedApplication.
         */
        interface ManagedApplicationStatus {
            apiKeyVersions: {
                [key: string]: string;
            };
            /**
             * Hash is a hash representing the ManagedApplication.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this ManagedApplication.
         */
        interface ManagedApplicationStatusPatch {
            apiKeyVersions: {
                [key: string]: string;
            };
            /**
             * Hash is a hash representing the ManagedApplication.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * ManagedSubscription defines a Subscription managed by the API manager as the result of a pre-negotiation with its
         * API consumers. This subscription grant consuming access to a set of APIs to a set of Applications.
         */
        interface ManagedSubscription {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "hub.traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "ManagedSubscription";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.hub.v1alpha1.ManagedSubscriptionSpec;
            status: outputs.hub.v1alpha1.ManagedSubscriptionStatus;
        }
        /**
         * The desired behavior of this ManagedSubscription.
         */
        interface ManagedSubscriptionSpec {
            /**
             * APIBundles defines a set of APIBundle that will be accessible.
             * Multiple ManagedSubscriptions can select the same APIBundles.
             */
            apiBundles: outputs.hub.v1alpha1.ManagedSubscriptionSpecApiBundles[];
            apiPlan: outputs.hub.v1alpha1.ManagedSubscriptionSpecApiPlan;
            apiSelector: outputs.hub.v1alpha1.ManagedSubscriptionSpecApiSelector;
            /**
             * APIs defines a set of APIs that will be accessible.
             * Multiple ManagedSubscriptions can select the same APIs.
             * When combined with APISelector, this set of APIs is appended to the matching APIs.
             */
            apis: outputs.hub.v1alpha1.ManagedSubscriptionSpecApis[];
            /**
             * Applications references the Applications that will gain access to the specified APIs.
             * Multiple ManagedSubscriptions can select the same AppID.
             * Deprecated: Use ManagedApplications instead.
             */
            applications: outputs.hub.v1alpha1.ManagedSubscriptionSpecApplications[];
            /**
             * Claims specifies an expression that validate claims in order to authorize the request.
             */
            claims: string;
            /**
             * ManagedApplications references the ManagedApplications that will gain access to the specified APIs.
             * Multiple ManagedSubscriptions can select the same ManagedApplication.
             */
            managedApplications: outputs.hub.v1alpha1.ManagedSubscriptionSpecManagedApplications[];
            operationFilter: outputs.hub.v1alpha1.ManagedSubscriptionSpecOperationFilter;
            /**
             * Weight specifies the evaluation order of the APIPlan.
             * When multiple ManagedSubscriptions targets the same API and Application with different APIPlan,
             * the APIPlan with the highest weight will be enforced. If weights are equal, alphabetical order is used.
             */
            weight: number;
        }
        /**
         * APIBundleReference references an APIBundle.
         */
        interface ManagedSubscriptionSpecApiBundles {
            /**
             * Name of the APIBundle.
             */
            name: string;
        }
        /**
         * APIBundleReference references an APIBundle.
         */
        interface ManagedSubscriptionSpecApiBundlesPatch {
            /**
             * Name of the APIBundle.
             */
            name: string;
        }
        /**
         * APIPlan defines which APIPlan will be used.
         */
        interface ManagedSubscriptionSpecApiPlan {
            /**
             * Name of the APIPlan.
             */
            name: string;
        }
        /**
         * APIPlan defines which APIPlan will be used.
         */
        interface ManagedSubscriptionSpecApiPlanPatch {
            /**
             * Name of the APIPlan.
             */
            name: string;
        }
        /**
         * APISelector selects the APIs that will be accessible.
         * Multiple ManagedSubscriptions can select the same set of APIs.
         * This field is optional and follows standard label selector semantics.
         * An empty APISelector matches any API.
         */
        interface ManagedSubscriptionSpecApiSelector {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.hub.v1alpha1.ManagedSubscriptionSpecApiSelectorMatchExpressions[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface ManagedSubscriptionSpecApiSelectorMatchExpressions {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * A label selector requirement is a selector that contains values, a key, and an operator that
         * relates the key and values.
         */
        interface ManagedSubscriptionSpecApiSelectorMatchExpressionsPatch {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values: string[];
        }
        /**
         * APISelector selects the APIs that will be accessible.
         * Multiple ManagedSubscriptions can select the same set of APIs.
         * This field is optional and follows standard label selector semantics.
         * An empty APISelector matches any API.
         */
        interface ManagedSubscriptionSpecApiSelectorPatch {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions: outputs.hub.v1alpha1.ManagedSubscriptionSpecApiSelectorMatchExpressionsPatch[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels: {
                [key: string]: string;
            };
        }
        /**
         * APIReference references an API.
         */
        interface ManagedSubscriptionSpecApis {
            /**
             * Name of the API.
             */
            name: string;
        }
        /**
         * APIReference references an API.
         */
        interface ManagedSubscriptionSpecApisPatch {
            /**
             * Name of the API.
             */
            name: string;
        }
        /**
         * ApplicationReference references an Application.
         */
        interface ManagedSubscriptionSpecApplications {
            /**
             * AppID is the public identifier of the application.
             * In the case of OIDC, it corresponds to the clientId.
             */
            appId: string;
        }
        /**
         * ApplicationReference references an Application.
         */
        interface ManagedSubscriptionSpecApplicationsPatch {
            /**
             * AppID is the public identifier of the application.
             * In the case of OIDC, it corresponds to the clientId.
             */
            appId: string;
        }
        /**
         * ManagedApplicationReference references a ManagedApplication.
         */
        interface ManagedSubscriptionSpecManagedApplications {
            /**
             * Name is the name of the ManagedApplication.
             */
            name: string;
        }
        /**
         * ManagedApplicationReference references a ManagedApplication.
         */
        interface ManagedSubscriptionSpecManagedApplicationsPatch {
            /**
             * Name is the name of the ManagedApplication.
             */
            name: string;
        }
        /**
         * OperationFilter specifies the allowed operations on APIs and APIVersions.
         * If not set, all operations are available.
         * An empty OperationFilter prohibits all operations.
         */
        interface ManagedSubscriptionSpecOperationFilter {
            /**
             * Include defines the names of OperationSets that will be accessible.
             */
            include: string[];
        }
        /**
         * OperationFilter specifies the allowed operations on APIs and APIVersions.
         * If not set, all operations are available.
         * An empty OperationFilter prohibits all operations.
         */
        interface ManagedSubscriptionSpecOperationFilterPatch {
            /**
             * Include defines the names of OperationSets that will be accessible.
             */
            include: string[];
        }
        /**
         * The desired behavior of this ManagedSubscription.
         */
        interface ManagedSubscriptionSpecPatch {
            /**
             * APIBundles defines a set of APIBundle that will be accessible.
             * Multiple ManagedSubscriptions can select the same APIBundles.
             */
            apiBundles: outputs.hub.v1alpha1.ManagedSubscriptionSpecApiBundlesPatch[];
            apiPlan: outputs.hub.v1alpha1.ManagedSubscriptionSpecApiPlanPatch;
            apiSelector: outputs.hub.v1alpha1.ManagedSubscriptionSpecApiSelectorPatch;
            /**
             * APIs defines a set of APIs that will be accessible.
             * Multiple ManagedSubscriptions can select the same APIs.
             * When combined with APISelector, this set of APIs is appended to the matching APIs.
             */
            apis: outputs.hub.v1alpha1.ManagedSubscriptionSpecApisPatch[];
            /**
             * Applications references the Applications that will gain access to the specified APIs.
             * Multiple ManagedSubscriptions can select the same AppID.
             * Deprecated: Use ManagedApplications instead.
             */
            applications: outputs.hub.v1alpha1.ManagedSubscriptionSpecApplicationsPatch[];
            /**
             * Claims specifies an expression that validate claims in order to authorize the request.
             */
            claims: string;
            /**
             * ManagedApplications references the ManagedApplications that will gain access to the specified APIs.
             * Multiple ManagedSubscriptions can select the same ManagedApplication.
             */
            managedApplications: outputs.hub.v1alpha1.ManagedSubscriptionSpecManagedApplicationsPatch[];
            operationFilter: outputs.hub.v1alpha1.ManagedSubscriptionSpecOperationFilterPatch;
            /**
             * Weight specifies the evaluation order of the APIPlan.
             * When multiple ManagedSubscriptions targets the same API and Application with different APIPlan,
             * the APIPlan with the highest weight will be enforced. If weights are equal, alphabetical order is used.
             */
            weight: number;
        }
        /**
         * The current status of this ManagedSubscription.
         */
        interface ManagedSubscriptionStatus {
            /**
             * Hash is a hash representing the ManagedSubscription.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
        /**
         * The current status of this ManagedSubscription.
         */
        interface ManagedSubscriptionStatusPatch {
            /**
             * Hash is a hash representing the ManagedSubscription.
             */
            hash: string;
            syncedAt: string;
            version: string;
        }
    }
}
export declare namespace meta {
    namespace v1 {
        /**
         * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
         */
        interface ListMeta {
            /**
             * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
             */
            continue: string;
            /**
             * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
             */
            remainingItemCount: number;
            /**
             * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntry {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion: string;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType: string;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager: string;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation: string;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource: string;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time: string;
        }
        /**
         * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
         */
        interface ManagedFieldsEntryPatch {
            /**
             * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
             */
            apiVersion: string;
            /**
             * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
             */
            fieldsType: string;
            /**
             * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
             */
            fieldsV1: any;
            /**
             * Manager is an identifier of the workflow managing these fields.
             */
            manager: string;
            /**
             * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
             */
            operation: string;
            /**
             * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
             */
            subresource: string;
            /**
             * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
             */
            time: string;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMeta {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp: string;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds: number;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp: string;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers: string[];
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName: string;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation: number;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels: {
                [key: string]: string;
            };
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields: outputs.meta.v1.ManagedFieldsEntry[];
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace: string;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences: outputs.meta.v1.OwnerReference[];
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
         */
        interface ObjectMetaPatch {
            /**
             * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
             */
            annotations: {
                [key: string]: string;
            };
            /**
             * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
             *
             * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            creationTimestamp: string;
            /**
             * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
             */
            deletionGracePeriodSeconds: number;
            /**
             * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
             *
             * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            deletionTimestamp: string;
            /**
             * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
             */
            finalizers: string[];
            /**
             * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
             *
             * If this field is specified and the generated name exists, the server will return a 409.
             *
             * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
             */
            generateName: string;
            /**
             * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
             */
            generation: number;
            /**
             * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
             */
            labels: {
                [key: string]: string;
            };
            /**
             * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
             */
            managedFields: outputs.meta.v1.ManagedFieldsEntryPatch[];
            /**
             * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
             *
             * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
             */
            namespace: string;
            /**
             * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
             */
            ownerReferences: outputs.meta.v1.OwnerReferencePatch[];
            /**
             * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
             *
             * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion: string;
            /**
             * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
             */
            selfLink: string;
            /**
             * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
             *
             * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReference {
            /**
             * API version of the referent.
             */
            apiVersion: string;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion: boolean;
            /**
             * If true, this reference points to the managing controller.
             */
            controller: boolean;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
        /**
         * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
         */
        interface OwnerReferencePatch {
            /**
             * API version of the referent.
             */
            apiVersion: string;
            /**
             * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
             */
            blockOwnerDeletion: boolean;
            /**
             * If true, this reference points to the managing controller.
             */
            controller: boolean;
            /**
             * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
             */
            name: string;
            /**
             * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
             */
            uid: string;
        }
    }
}
export declare namespace traefik {
    namespace v1alpha1 {
        /**
         * IngressRoute is the CRD implementation of a Traefik HTTP Router.
         */
        interface IngressRoute {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "IngressRoute";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.traefik.v1alpha1.IngressRouteSpec;
        }
        /**
         * IngressRouteSpec defines the desired state of IngressRoute.
         */
        interface IngressRouteSpec {
            /**
             * EntryPoints defines the list of entry point names to bind to.
             * Entry points have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/entrypoints/
             * Default: all.
             */
            entryPoints: string[];
            /**
             * Routes defines the list of routes.
             */
            routes: outputs.traefik.v1alpha1.IngressRouteSpecRoutes[];
            tls: outputs.traefik.v1alpha1.IngressRouteSpecTls;
        }
        /**
         * IngressRouteSpec defines the desired state of IngressRoute.
         */
        interface IngressRouteSpecPatch {
            /**
             * EntryPoints defines the list of entry point names to bind to.
             * Entry points have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/entrypoints/
             * Default: all.
             */
            entryPoints: string[];
            /**
             * Routes defines the list of routes.
             */
            routes: outputs.traefik.v1alpha1.IngressRouteSpecRoutesPatch[];
            tls: outputs.traefik.v1alpha1.IngressRouteSpecTlsPatch;
        }
        /**
         * Route holds the HTTP route configuration.
         */
        interface IngressRouteSpecRoutes {
            /**
             * Kind defines the kind of the route.
             * Rule is the only supported kind.
             * If not defined, defaults to Rule.
             */
            kind: string;
            /**
             * Match defines the router's rule.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#rule
             */
            match: string;
            /**
             * Middlewares defines the list of references to Middleware resources.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-middleware
             */
            middlewares: outputs.traefik.v1alpha1.IngressRouteSpecRoutesMiddlewares[];
            observability: outputs.traefik.v1alpha1.IngressRouteSpecRoutesObservability;
            /**
             * Priority defines the router's priority.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#priority
             */
            priority: number;
            /**
             * Services defines the list of Service.
             * It can contain any combination of TraefikService and/or reference to a Kubernetes Service.
             */
            services: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServices[];
            /**
             * Syntax defines the router's rule syntax.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#rulesyntax
             * Deprecated: Please do not use this field and rewrite the router rules to use the v3 syntax.
             */
            syntax: string;
        }
        /**
         * MiddlewareRef is a reference to a Middleware resource.
         */
        interface IngressRouteSpecRoutesMiddlewares {
            /**
             * Name defines the name of the referenced Middleware resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Middleware resource.
             */
            namespace: string;
        }
        /**
         * MiddlewareRef is a reference to a Middleware resource.
         */
        interface IngressRouteSpecRoutesMiddlewaresPatch {
            /**
             * Name defines the name of the referenced Middleware resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Middleware resource.
             */
            namespace: string;
        }
        /**
         * Observability defines the observability configuration for a router.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#observability
         */
        interface IngressRouteSpecRoutesObservability {
            /**
             * AccessLogs enables access logs for this router.
             */
            accessLogs: boolean;
            /**
             * Metrics enables metrics for this router.
             */
            metrics: boolean;
            /**
             * TraceVerbosity defines the verbosity level of the tracing for this router.
             */
            traceVerbosity: string;
            /**
             * Tracing enables tracing for this router.
             */
            tracing: boolean;
        }
        /**
         * Observability defines the observability configuration for a router.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#observability
         */
        interface IngressRouteSpecRoutesObservabilityPatch {
            /**
             * AccessLogs enables access logs for this router.
             */
            accessLogs: boolean;
            /**
             * Metrics enables metrics for this router.
             */
            metrics: boolean;
            /**
             * TraceVerbosity defines the verbosity level of the tracing for this router.
             */
            traceVerbosity: string;
            /**
             * Tracing enables tracing for this router.
             */
            tracing: boolean;
        }
        /**
         * Route holds the HTTP route configuration.
         */
        interface IngressRouteSpecRoutesPatch {
            /**
             * Kind defines the kind of the route.
             * Rule is the only supported kind.
             * If not defined, defaults to Rule.
             */
            kind: string;
            /**
             * Match defines the router's rule.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#rule
             */
            match: string;
            /**
             * Middlewares defines the list of references to Middleware resources.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-middleware
             */
            middlewares: outputs.traefik.v1alpha1.IngressRouteSpecRoutesMiddlewaresPatch[];
            observability: outputs.traefik.v1alpha1.IngressRouteSpecRoutesObservabilityPatch;
            /**
             * Priority defines the router's priority.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#priority
             */
            priority: number;
            /**
             * Services defines the list of Service.
             * It can contain any combination of TraefikService and/or reference to a Kubernetes Service.
             */
            services: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesPatch[];
            /**
             * Syntax defines the router's rule syntax.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#rulesyntax
             * Deprecated: Please do not use this field and rewrite the router rules to use the v3 syntax.
             */
            syntax: string;
        }
        /**
         * Service defines an upstream HTTP service to proxy traffic to.
         */
        interface IngressRouteSpecRoutesServices {
            healthCheck: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesHealthCheck;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesResponseForwarding;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesSticky;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface IngressRouteSpecRoutesServicesHealthCheck {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface IngressRouteSpecRoutesServicesHealthCheckPatch {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * Service defines an upstream HTTP service to proxy traffic to.
         */
        interface IngressRouteSpecRoutesServicesPatch {
            healthCheck: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesHealthCheckPatch;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesResponseForwardingPatch;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesStickyPatch;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface IngressRouteSpecRoutesServicesResponseForwarding {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface IngressRouteSpecRoutesServicesResponseForwardingPatch {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface IngressRouteSpecRoutesServicesSticky {
            cookie: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesStickyCookie;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface IngressRouteSpecRoutesServicesStickyCookie {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface IngressRouteSpecRoutesServicesStickyCookiePatch {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface IngressRouteSpecRoutesServicesStickyPatch {
            cookie: outputs.traefik.v1alpha1.IngressRouteSpecRoutesServicesStickyCookiePatch;
        }
        /**
         * TLS defines the TLS configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#tls
         */
        interface IngressRouteSpecTls {
            /**
             * CertResolver defines the name of the certificate resolver to use.
             * Cert resolvers have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/https/acme/#certificate-resolvers
             */
            certResolver: string;
            /**
             * Domains defines the list of domains that will be used to issue certificates.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#domains
             */
            domains: outputs.traefik.v1alpha1.IngressRouteSpecTlsDomains[];
            options: outputs.traefik.v1alpha1.IngressRouteSpecTlsOptions;
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            secretName: string;
            store: outputs.traefik.v1alpha1.IngressRouteSpecTlsStore;
        }
        /**
         * Domain holds a domain name with SANs.
         */
        interface IngressRouteSpecTlsDomains {
            /**
             * Main defines the main domain name.
             */
            main: string;
            /**
             * SANs defines the subject alternative domain names.
             */
            sans: string[];
        }
        /**
         * Domain holds a domain name with SANs.
         */
        interface IngressRouteSpecTlsDomainsPatch {
            /**
             * Main defines the main domain name.
             */
            main: string;
            /**
             * SANs defines the subject alternative domain names.
             */
            sans: string[];
        }
        /**
         * Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.
         * If not defined, the `default` TLSOption is used.
         * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#tls-options
         */
        interface IngressRouteSpecTlsOptions {
            /**
             * Name defines the name of the referenced TLSOption.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-tlsoption
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced TLSOption.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-tlsoption
             */
            namespace: string;
        }
        /**
         * Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.
         * If not defined, the `default` TLSOption is used.
         * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#tls-options
         */
        interface IngressRouteSpecTlsOptionsPatch {
            /**
             * Name defines the name of the referenced TLSOption.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-tlsoption
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced TLSOption.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-tlsoption
             */
            namespace: string;
        }
        /**
         * TLS defines the TLS configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#tls
         */
        interface IngressRouteSpecTlsPatch {
            /**
             * CertResolver defines the name of the certificate resolver to use.
             * Cert resolvers have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/https/acme/#certificate-resolvers
             */
            certResolver: string;
            /**
             * Domains defines the list of domains that will be used to issue certificates.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#domains
             */
            domains: outputs.traefik.v1alpha1.IngressRouteSpecTlsDomainsPatch[];
            options: outputs.traefik.v1alpha1.IngressRouteSpecTlsOptionsPatch;
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            secretName: string;
            store: outputs.traefik.v1alpha1.IngressRouteSpecTlsStorePatch;
        }
        /**
         * Store defines the reference to the TLSStore, that will be used to store certificates.
         * Please note that only `default` TLSStore can be used.
         */
        interface IngressRouteSpecTlsStore {
            /**
             * Name defines the name of the referenced TLSStore.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-tlsstore
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced TLSStore.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-tlsstore
             */
            namespace: string;
        }
        /**
         * Store defines the reference to the TLSStore, that will be used to store certificates.
         * Please note that only `default` TLSStore can be used.
         */
        interface IngressRouteSpecTlsStorePatch {
            /**
             * Name defines the name of the referenced TLSStore.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-tlsstore
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced TLSStore.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-tlsstore
             */
            namespace: string;
        }
        /**
         * IngressRouteTCP is the CRD implementation of a Traefik TCP Router.
         */
        interface IngressRouteTCP {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "IngressRouteTCP";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.traefik.v1alpha1.IngressRouteTCPSpec;
        }
        /**
         * IngressRouteTCPSpec defines the desired state of IngressRouteTCP.
         */
        interface IngressRouteTCPSpec {
            /**
             * EntryPoints defines the list of entry point names to bind to.
             * Entry points have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/entrypoints/
             * Default: all.
             */
            entryPoints: string[];
            /**
             * Routes defines the list of routes.
             */
            routes: outputs.traefik.v1alpha1.IngressRouteTCPSpecRoutes[];
            tls: outputs.traefik.v1alpha1.IngressRouteTCPSpecTls;
        }
        /**
         * IngressRouteTCPSpec defines the desired state of IngressRouteTCP.
         */
        interface IngressRouteTCPSpecPatch {
            /**
             * EntryPoints defines the list of entry point names to bind to.
             * Entry points have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/entrypoints/
             * Default: all.
             */
            entryPoints: string[];
            /**
             * Routes defines the list of routes.
             */
            routes: outputs.traefik.v1alpha1.IngressRouteTCPSpecRoutesPatch[];
            tls: outputs.traefik.v1alpha1.IngressRouteTCPSpecTlsPatch;
        }
        /**
         * RouteTCP holds the TCP route configuration.
         */
        interface IngressRouteTCPSpecRoutes {
            /**
             * Match defines the router's rule.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#rule_1
             */
            match: string;
            /**
             * Middlewares defines the list of references to MiddlewareTCP resources.
             */
            middlewares: outputs.traefik.v1alpha1.IngressRouteTCPSpecRoutesMiddlewares[];
            /**
             * Priority defines the router's priority.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#priority_1
             */
            priority: number;
            /**
             * Services defines the list of TCP services.
             */
            services: outputs.traefik.v1alpha1.IngressRouteTCPSpecRoutesServices[];
            /**
             * Syntax defines the router's rule syntax.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#rulesyntax_1
             * Deprecated: Please do not use this field and rewrite the router rules to use the v3 syntax.
             */
            syntax: string;
        }
        /**
         * ObjectReference is a generic reference to a Traefik resource.
         */
        interface IngressRouteTCPSpecRoutesMiddlewares {
            /**
             * Name defines the name of the referenced Traefik resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Traefik resource.
             */
            namespace: string;
        }
        /**
         * ObjectReference is a generic reference to a Traefik resource.
         */
        interface IngressRouteTCPSpecRoutesMiddlewaresPatch {
            /**
             * Name defines the name of the referenced Traefik resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Traefik resource.
             */
            namespace: string;
        }
        /**
         * RouteTCP holds the TCP route configuration.
         */
        interface IngressRouteTCPSpecRoutesPatch {
            /**
             * Match defines the router's rule.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#rule_1
             */
            match: string;
            /**
             * Middlewares defines the list of references to MiddlewareTCP resources.
             */
            middlewares: outputs.traefik.v1alpha1.IngressRouteTCPSpecRoutesMiddlewaresPatch[];
            /**
             * Priority defines the router's priority.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#priority_1
             */
            priority: number;
            /**
             * Services defines the list of TCP services.
             */
            services: outputs.traefik.v1alpha1.IngressRouteTCPSpecRoutesServicesPatch[];
            /**
             * Syntax defines the router's rule syntax.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#rulesyntax_1
             * Deprecated: Please do not use this field and rewrite the router rules to use the v3 syntax.
             */
            syntax: string;
        }
        /**
         * ServiceTCP defines an upstream TCP service to proxy traffic to.
         */
        interface IngressRouteTCPSpecRoutesServices {
            /**
             * Name defines the name of the referenced Kubernetes Service.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            proxyProtocol: outputs.traefik.v1alpha1.IngressRouteTCPSpecRoutesServicesProxyProtocol;
            /**
             * ServersTransport defines the name of ServersTransportTCP resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            /**
             * TerminationDelay defines the deadline that the proxy sets, after one of its connected peers indicates
             * it has closed the writing capability of its connection, to close the reading capability as well,
             * hence fully terminating the connection.
             * It is a duration in milliseconds, defaulting to 100.
             * A negative value means an infinite deadline (i.e. the reading capability is never closed).
             * Deprecated: TerminationDelay will not be supported in future APIVersions, please use ServersTransport to configure the TerminationDelay instead.
             */
            terminationDelay: number;
            /**
             * TLS determines whether to use TLS when dialing with the backend.
             */
            tls: boolean;
            /**
             * Weight defines the weight used when balancing requests between multiple Kubernetes Service.
             */
            weight: number;
        }
        /**
         * ServiceTCP defines an upstream TCP service to proxy traffic to.
         */
        interface IngressRouteTCPSpecRoutesServicesPatch {
            /**
             * Name defines the name of the referenced Kubernetes Service.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            proxyProtocol: outputs.traefik.v1alpha1.IngressRouteTCPSpecRoutesServicesProxyProtocolPatch;
            /**
             * ServersTransport defines the name of ServersTransportTCP resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            /**
             * TerminationDelay defines the deadline that the proxy sets, after one of its connected peers indicates
             * it has closed the writing capability of its connection, to close the reading capability as well,
             * hence fully terminating the connection.
             * It is a duration in milliseconds, defaulting to 100.
             * A negative value means an infinite deadline (i.e. the reading capability is never closed).
             * Deprecated: TerminationDelay will not be supported in future APIVersions, please use ServersTransport to configure the TerminationDelay instead.
             */
            terminationDelay: number;
            /**
             * TLS determines whether to use TLS when dialing with the backend.
             */
            tls: boolean;
            /**
             * Weight defines the weight used when balancing requests between multiple Kubernetes Service.
             */
            weight: number;
        }
        /**
         * ProxyProtocol defines the PROXY protocol configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#proxy-protocol
         */
        interface IngressRouteTCPSpecRoutesServicesProxyProtocol {
            /**
             * Version defines the PROXY Protocol version to use.
             */
            version: number;
        }
        /**
         * ProxyProtocol defines the PROXY protocol configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#proxy-protocol
         */
        interface IngressRouteTCPSpecRoutesServicesProxyProtocolPatch {
            /**
             * Version defines the PROXY Protocol version to use.
             */
            version: number;
        }
        /**
         * TLS defines the TLS configuration on a layer 4 / TCP Route.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#tls_1
         */
        interface IngressRouteTCPSpecTls {
            /**
             * CertResolver defines the name of the certificate resolver to use.
             * Cert resolvers have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/https/acme/#certificate-resolvers
             */
            certResolver: string;
            /**
             * Domains defines the list of domains that will be used to issue certificates.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#domains
             */
            domains: outputs.traefik.v1alpha1.IngressRouteTCPSpecTlsDomains[];
            options: outputs.traefik.v1alpha1.IngressRouteTCPSpecTlsOptions;
            /**
             * Passthrough defines whether a TLS router will terminate the TLS connection.
             */
            passthrough: boolean;
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            secretName: string;
            store: outputs.traefik.v1alpha1.IngressRouteTCPSpecTlsStore;
        }
        /**
         * Domain holds a domain name with SANs.
         */
        interface IngressRouteTCPSpecTlsDomains {
            /**
             * Main defines the main domain name.
             */
            main: string;
            /**
             * SANs defines the subject alternative domain names.
             */
            sans: string[];
        }
        /**
         * Domain holds a domain name with SANs.
         */
        interface IngressRouteTCPSpecTlsDomainsPatch {
            /**
             * Main defines the main domain name.
             */
            main: string;
            /**
             * SANs defines the subject alternative domain names.
             */
            sans: string[];
        }
        /**
         * Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.
         * If not defined, the `default` TLSOption is used.
         * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#tls-options
         */
        interface IngressRouteTCPSpecTlsOptions {
            /**
             * Name defines the name of the referenced Traefik resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Traefik resource.
             */
            namespace: string;
        }
        /**
         * Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.
         * If not defined, the `default` TLSOption is used.
         * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#tls-options
         */
        interface IngressRouteTCPSpecTlsOptionsPatch {
            /**
             * Name defines the name of the referenced Traefik resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Traefik resource.
             */
            namespace: string;
        }
        /**
         * TLS defines the TLS configuration on a layer 4 / TCP Route.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#tls_1
         */
        interface IngressRouteTCPSpecTlsPatch {
            /**
             * CertResolver defines the name of the certificate resolver to use.
             * Cert resolvers have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/https/acme/#certificate-resolvers
             */
            certResolver: string;
            /**
             * Domains defines the list of domains that will be used to issue certificates.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/routers/#domains
             */
            domains: outputs.traefik.v1alpha1.IngressRouteTCPSpecTlsDomainsPatch[];
            options: outputs.traefik.v1alpha1.IngressRouteTCPSpecTlsOptionsPatch;
            /**
             * Passthrough defines whether a TLS router will terminate the TLS connection.
             */
            passthrough: boolean;
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            secretName: string;
            store: outputs.traefik.v1alpha1.IngressRouteTCPSpecTlsStorePatch;
        }
        /**
         * Store defines the reference to the TLSStore, that will be used to store certificates.
         * Please note that only `default` TLSStore can be used.
         */
        interface IngressRouteTCPSpecTlsStore {
            /**
             * Name defines the name of the referenced Traefik resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Traefik resource.
             */
            namespace: string;
        }
        /**
         * Store defines the reference to the TLSStore, that will be used to store certificates.
         * Please note that only `default` TLSStore can be used.
         */
        interface IngressRouteTCPSpecTlsStorePatch {
            /**
             * Name defines the name of the referenced Traefik resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Traefik resource.
             */
            namespace: string;
        }
        /**
         * IngressRouteUDP is a CRD implementation of a Traefik UDP Router.
         */
        interface IngressRouteUDP {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "IngressRouteUDP";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.traefik.v1alpha1.IngressRouteUDPSpec;
        }
        /**
         * IngressRouteUDPSpec defines the desired state of a IngressRouteUDP.
         */
        interface IngressRouteUDPSpec {
            /**
             * EntryPoints defines the list of entry point names to bind to.
             * Entry points have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/entrypoints/
             * Default: all.
             */
            entryPoints: string[];
            /**
             * Routes defines the list of routes.
             */
            routes: outputs.traefik.v1alpha1.IngressRouteUDPSpecRoutes[];
        }
        /**
         * IngressRouteUDPSpec defines the desired state of a IngressRouteUDP.
         */
        interface IngressRouteUDPSpecPatch {
            /**
             * EntryPoints defines the list of entry point names to bind to.
             * Entry points have to be configured in the static configuration.
             * More info: https://doc.traefik.io/traefik/v3.5/routing/entrypoints/
             * Default: all.
             */
            entryPoints: string[];
            /**
             * Routes defines the list of routes.
             */
            routes: outputs.traefik.v1alpha1.IngressRouteUDPSpecRoutesPatch[];
        }
        /**
         * RouteUDP holds the UDP route configuration.
         */
        interface IngressRouteUDPSpecRoutes {
            /**
             * Services defines the list of UDP services.
             */
            services: outputs.traefik.v1alpha1.IngressRouteUDPSpecRoutesServices[];
        }
        /**
         * RouteUDP holds the UDP route configuration.
         */
        interface IngressRouteUDPSpecRoutesPatch {
            /**
             * Services defines the list of UDP services.
             */
            services: outputs.traefik.v1alpha1.IngressRouteUDPSpecRoutesServicesPatch[];
        }
        /**
         * ServiceUDP defines an upstream UDP service to proxy traffic to.
         */
        interface IngressRouteUDPSpecRoutesServices {
            /**
             * Name defines the name of the referenced Kubernetes Service.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            /**
             * Weight defines the weight used when balancing requests between multiple Kubernetes Service.
             */
            weight: number;
        }
        /**
         * ServiceUDP defines an upstream UDP service to proxy traffic to.
         */
        interface IngressRouteUDPSpecRoutesServicesPatch {
            /**
             * Name defines the name of the referenced Kubernetes Service.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            /**
             * Weight defines the weight used when balancing requests between multiple Kubernetes Service.
             */
            weight: number;
        }
        /**
         * Middleware is the CRD implementation of a Traefik Middleware.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/overview/
         */
        interface Middleware {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "Middleware";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.traefik.v1alpha1.MiddlewareSpec;
        }
        /**
         * MiddlewareSpec defines the desired state of a Middleware.
         */
        interface MiddlewareSpec {
            addPrefix: outputs.traefik.v1alpha1.MiddlewareSpecAddPrefix;
            basicAuth: outputs.traefik.v1alpha1.MiddlewareSpecBasicAuth;
            buffering: outputs.traefik.v1alpha1.MiddlewareSpecBuffering;
            chain: outputs.traefik.v1alpha1.MiddlewareSpecChain;
            circuitBreaker: outputs.traefik.v1alpha1.MiddlewareSpecCircuitBreaker;
            compress: outputs.traefik.v1alpha1.MiddlewareSpecCompress;
            contentType: outputs.traefik.v1alpha1.MiddlewareSpecContentType;
            digestAuth: outputs.traefik.v1alpha1.MiddlewareSpecDigestAuth;
            errors: outputs.traefik.v1alpha1.MiddlewareSpecErrors;
            forwardAuth: outputs.traefik.v1alpha1.MiddlewareSpecForwardAuth;
            grpcWeb: outputs.traefik.v1alpha1.MiddlewareSpecGrpcWeb;
            headers: outputs.traefik.v1alpha1.MiddlewareSpecHeaders;
            inFlightReq: outputs.traefik.v1alpha1.MiddlewareSpecInFlightReq;
            ipAllowList: outputs.traefik.v1alpha1.MiddlewareSpecIpAllowList;
            ipWhiteList: outputs.traefik.v1alpha1.MiddlewareSpecIpWhiteList;
            passTLSClientCert: outputs.traefik.v1alpha1.MiddlewareSpecPassTLSClientCert;
            /**
             * Plugin defines the middleware plugin configuration.
             * More info: https://doc.traefik.io/traefik/plugins/
             */
            plugin: {
                [key: string]: {
                    [key: string]: any;
                };
            };
            rateLimit: outputs.traefik.v1alpha1.MiddlewareSpecRateLimit;
            redirectRegex: outputs.traefik.v1alpha1.MiddlewareSpecRedirectRegex;
            redirectScheme: outputs.traefik.v1alpha1.MiddlewareSpecRedirectScheme;
            replacePath: outputs.traefik.v1alpha1.MiddlewareSpecReplacePath;
            replacePathRegex: outputs.traefik.v1alpha1.MiddlewareSpecReplacePathRegex;
            retry: outputs.traefik.v1alpha1.MiddlewareSpecRetry;
            stripPrefix: outputs.traefik.v1alpha1.MiddlewareSpecStripPrefix;
            stripPrefixRegex: outputs.traefik.v1alpha1.MiddlewareSpecStripPrefixRegex;
        }
        /**
         * AddPrefix holds the add prefix middleware configuration.
         * This middleware updates the path of a request before forwarding it.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/addprefix/
         */
        interface MiddlewareSpecAddPrefix {
            /**
             * Prefix is the string to add before the current path in the requested URL.
             * It should include a leading slash (/).
             */
            prefix: string;
        }
        /**
         * AddPrefix holds the add prefix middleware configuration.
         * This middleware updates the path of a request before forwarding it.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/addprefix/
         */
        interface MiddlewareSpecAddPrefixPatch {
            /**
             * Prefix is the string to add before the current path in the requested URL.
             * It should include a leading slash (/).
             */
            prefix: string;
        }
        /**
         * BasicAuth holds the basic auth middleware configuration.
         * This middleware restricts access to your services to known users.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/basicauth/
         */
        interface MiddlewareSpecBasicAuth {
            /**
             * HeaderField defines a header field to store the authenticated user.
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/basicauth/#headerfield
             */
            headerField: string;
            /**
             * Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme.
             * Default: traefik.
             */
            realm: string;
            /**
             * RemoveHeader sets the removeHeader option to true to remove the authorization header before forwarding the request to your service.
             * Default: false.
             */
            removeHeader: boolean;
            /**
             * Secret is the name of the referenced Kubernetes Secret containing user credentials.
             */
            secret: string;
        }
        /**
         * BasicAuth holds the basic auth middleware configuration.
         * This middleware restricts access to your services to known users.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/basicauth/
         */
        interface MiddlewareSpecBasicAuthPatch {
            /**
             * HeaderField defines a header field to store the authenticated user.
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/basicauth/#headerfield
             */
            headerField: string;
            /**
             * Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme.
             * Default: traefik.
             */
            realm: string;
            /**
             * RemoveHeader sets the removeHeader option to true to remove the authorization header before forwarding the request to your service.
             * Default: false.
             */
            removeHeader: boolean;
            /**
             * Secret is the name of the referenced Kubernetes Secret containing user credentials.
             */
            secret: string;
        }
        /**
         * Buffering holds the buffering middleware configuration.
         * This middleware retries or limits the size of requests that can be forwarded to backends.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/buffering/#maxrequestbodybytes
         */
        interface MiddlewareSpecBuffering {
            /**
             * MaxRequestBodyBytes defines the maximum allowed body size for the request (in bytes).
             * If the request exceeds the allowed size, it is not forwarded to the service, and the client gets a 413 (Request Entity Too Large) response.
             * Default: 0 (no maximum).
             */
            maxRequestBodyBytes: number;
            /**
             * MaxResponseBodyBytes defines the maximum allowed response size from the service (in bytes).
             * If the response exceeds the allowed size, it is not forwarded to the client. The client gets a 500 (Internal Server Error) response instead.
             * Default: 0 (no maximum).
             */
            maxResponseBodyBytes: number;
            /**
             * MemRequestBodyBytes defines the threshold (in bytes) from which the request will be buffered on disk instead of in memory.
             * Default: 1048576 (1Mi).
             */
            memRequestBodyBytes: number;
            /**
             * MemResponseBodyBytes defines the threshold (in bytes) from which the response will be buffered on disk instead of in memory.
             * Default: 1048576 (1Mi).
             */
            memResponseBodyBytes: number;
            /**
             * RetryExpression defines the retry conditions.
             * It is a logical combination of functions with operators AND (&&) and OR (||).
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/buffering/#retryexpression
             */
            retryExpression: string;
        }
        /**
         * Buffering holds the buffering middleware configuration.
         * This middleware retries or limits the size of requests that can be forwarded to backends.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/buffering/#maxrequestbodybytes
         */
        interface MiddlewareSpecBufferingPatch {
            /**
             * MaxRequestBodyBytes defines the maximum allowed body size for the request (in bytes).
             * If the request exceeds the allowed size, it is not forwarded to the service, and the client gets a 413 (Request Entity Too Large) response.
             * Default: 0 (no maximum).
             */
            maxRequestBodyBytes: number;
            /**
             * MaxResponseBodyBytes defines the maximum allowed response size from the service (in bytes).
             * If the response exceeds the allowed size, it is not forwarded to the client. The client gets a 500 (Internal Server Error) response instead.
             * Default: 0 (no maximum).
             */
            maxResponseBodyBytes: number;
            /**
             * MemRequestBodyBytes defines the threshold (in bytes) from which the request will be buffered on disk instead of in memory.
             * Default: 1048576 (1Mi).
             */
            memRequestBodyBytes: number;
            /**
             * MemResponseBodyBytes defines the threshold (in bytes) from which the response will be buffered on disk instead of in memory.
             * Default: 1048576 (1Mi).
             */
            memResponseBodyBytes: number;
            /**
             * RetryExpression defines the retry conditions.
             * It is a logical combination of functions with operators AND (&&) and OR (||).
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/buffering/#retryexpression
             */
            retryExpression: string;
        }
        /**
         * Chain holds the configuration of the chain middleware.
         * This middleware enables to define reusable combinations of other pieces of middleware.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/chain/
         */
        interface MiddlewareSpecChain {
            /**
             * Middlewares is the list of MiddlewareRef which composes the chain.
             */
            middlewares: outputs.traefik.v1alpha1.MiddlewareSpecChainMiddlewares[];
        }
        /**
         * MiddlewareRef is a reference to a Middleware resource.
         */
        interface MiddlewareSpecChainMiddlewares {
            /**
             * Name defines the name of the referenced Middleware resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Middleware resource.
             */
            namespace: string;
        }
        /**
         * MiddlewareRef is a reference to a Middleware resource.
         */
        interface MiddlewareSpecChainMiddlewaresPatch {
            /**
             * Name defines the name of the referenced Middleware resource.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Middleware resource.
             */
            namespace: string;
        }
        /**
         * Chain holds the configuration of the chain middleware.
         * This middleware enables to define reusable combinations of other pieces of middleware.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/chain/
         */
        interface MiddlewareSpecChainPatch {
            /**
             * Middlewares is the list of MiddlewareRef which composes the chain.
             */
            middlewares: outputs.traefik.v1alpha1.MiddlewareSpecChainMiddlewaresPatch[];
        }
        /**
         * CircuitBreaker holds the circuit breaker configuration.
         */
        interface MiddlewareSpecCircuitBreaker {
            /**
             * CheckPeriod is the interval between successive checks of the circuit breaker condition (when in standby state).
             */
            checkPeriod: number | string;
            /**
             * Expression is the condition that triggers the tripped state.
             */
            expression: string;
            /**
             * FallbackDuration is the duration for which the circuit breaker will wait before trying to recover (from a tripped state).
             */
            fallbackDuration: number | string;
            /**
             * RecoveryDuration is the duration for which the circuit breaker will try to recover (as soon as it is in recovering state).
             */
            recoveryDuration: number | string;
            /**
             * ResponseCode is the status code that the circuit breaker will return while it is in the open state.
             */
            responseCode: number;
        }
        /**
         * CircuitBreaker holds the circuit breaker configuration.
         */
        interface MiddlewareSpecCircuitBreakerPatch {
            /**
             * CheckPeriod is the interval between successive checks of the circuit breaker condition (when in standby state).
             */
            checkPeriod: number | string;
            /**
             * Expression is the condition that triggers the tripped state.
             */
            expression: string;
            /**
             * FallbackDuration is the duration for which the circuit breaker will wait before trying to recover (from a tripped state).
             */
            fallbackDuration: number | string;
            /**
             * RecoveryDuration is the duration for which the circuit breaker will try to recover (as soon as it is in recovering state).
             */
            recoveryDuration: number | string;
            /**
             * ResponseCode is the status code that the circuit breaker will return while it is in the open state.
             */
            responseCode: number;
        }
        /**
         * Compress holds the compress middleware configuration.
         * This middleware compresses responses before sending them to the client, using gzip, brotli, or zstd compression.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/compress/
         */
        interface MiddlewareSpecCompress {
            /**
             * DefaultEncoding specifies the default encoding if the `Accept-Encoding` header is not in the request or contains a wildcard (`*`).
             */
            defaultEncoding: string;
            /**
             * Encodings defines the list of supported compression algorithms.
             */
            encodings: string[];
            /**
             * ExcludedContentTypes defines the list of content types to compare the Content-Type header of the incoming requests and responses before compressing.
             * `application/grpc` is always excluded.
             */
            excludedContentTypes: string[];
            /**
             * IncludedContentTypes defines the list of content types to compare the Content-Type header of the responses before compressing.
             */
            includedContentTypes: string[];
            /**
             * MinResponseBodyBytes defines the minimum amount of bytes a response body must have to be compressed.
             * Default: 1024.
             */
            minResponseBodyBytes: number;
        }
        /**
         * Compress holds the compress middleware configuration.
         * This middleware compresses responses before sending them to the client, using gzip, brotli, or zstd compression.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/compress/
         */
        interface MiddlewareSpecCompressPatch {
            /**
             * DefaultEncoding specifies the default encoding if the `Accept-Encoding` header is not in the request or contains a wildcard (`*`).
             */
            defaultEncoding: string;
            /**
             * Encodings defines the list of supported compression algorithms.
             */
            encodings: string[];
            /**
             * ExcludedContentTypes defines the list of content types to compare the Content-Type header of the incoming requests and responses before compressing.
             * `application/grpc` is always excluded.
             */
            excludedContentTypes: string[];
            /**
             * IncludedContentTypes defines the list of content types to compare the Content-Type header of the responses before compressing.
             */
            includedContentTypes: string[];
            /**
             * MinResponseBodyBytes defines the minimum amount of bytes a response body must have to be compressed.
             * Default: 1024.
             */
            minResponseBodyBytes: number;
        }
        /**
         * ContentType holds the content-type middleware configuration.
         * This middleware exists to enable the correct behavior until at least the default one can be changed in a future version.
         */
        interface MiddlewareSpecContentType {
            /**
             * AutoDetect specifies whether to let the `Content-Type` header, if it has not been set by the backend,
             * be automatically set to a value derived from the contents of the response.
             * Deprecated: AutoDetect option is deprecated, Content-Type middleware is only meant to be used to enable the content-type detection, please remove any usage of this option.
             */
            autoDetect: boolean;
        }
        /**
         * ContentType holds the content-type middleware configuration.
         * This middleware exists to enable the correct behavior until at least the default one can be changed in a future version.
         */
        interface MiddlewareSpecContentTypePatch {
            /**
             * AutoDetect specifies whether to let the `Content-Type` header, if it has not been set by the backend,
             * be automatically set to a value derived from the contents of the response.
             * Deprecated: AutoDetect option is deprecated, Content-Type middleware is only meant to be used to enable the content-type detection, please remove any usage of this option.
             */
            autoDetect: boolean;
        }
        /**
         * DigestAuth holds the digest auth middleware configuration.
         * This middleware restricts access to your services to known users.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/digestauth/
         */
        interface MiddlewareSpecDigestAuth {
            /**
             * HeaderField defines a header field to store the authenticated user.
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/basicauth/#headerfield
             */
            headerField: string;
            /**
             * Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme.
             * Default: traefik.
             */
            realm: string;
            /**
             * RemoveHeader defines whether to remove the authorization header before forwarding the request to the backend.
             */
            removeHeader: boolean;
            /**
             * Secret is the name of the referenced Kubernetes Secret containing user credentials.
             */
            secret: string;
        }
        /**
         * DigestAuth holds the digest auth middleware configuration.
         * This middleware restricts access to your services to known users.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/digestauth/
         */
        interface MiddlewareSpecDigestAuthPatch {
            /**
             * HeaderField defines a header field to store the authenticated user.
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/basicauth/#headerfield
             */
            headerField: string;
            /**
             * Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme.
             * Default: traefik.
             */
            realm: string;
            /**
             * RemoveHeader defines whether to remove the authorization header before forwarding the request to the backend.
             */
            removeHeader: boolean;
            /**
             * Secret is the name of the referenced Kubernetes Secret containing user credentials.
             */
            secret: string;
        }
        /**
         * ErrorPage holds the custom error middleware configuration.
         * This middleware returns a custom page in lieu of the default, according to configured ranges of HTTP Status codes.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/errorpages/
         */
        interface MiddlewareSpecErrors {
            /**
             * Query defines the URL for the error page (hosted by service).
             * The {status} variable can be used in order to insert the status code in the URL.
             * The {originalStatus} variable can be used in order to insert the upstream status code in the URL.
             * The {url} variable can be used in order to insert the escaped request URL.
             */
            query: string;
            service: outputs.traefik.v1alpha1.MiddlewareSpecErrorsService;
            /**
             * Status defines which status or range of statuses should result in an error page.
             * It can be either a status code as a number (500),
             * as multiple comma-separated numbers (500,502),
             * as ranges by separating two codes with a dash (500-599),
             * or a combination of the two (404,418,500-599).
             */
            status: string[];
            /**
             * StatusRewrites defines a mapping of status codes that should be returned instead of the original error status codes.
             * For example: "418": 404 or "410-418": 404
             */
            statusRewrites: {
                [key: string]: number;
            };
        }
        /**
         * ErrorPage holds the custom error middleware configuration.
         * This middleware returns a custom page in lieu of the default, according to configured ranges of HTTP Status codes.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/errorpages/
         */
        interface MiddlewareSpecErrorsPatch {
            /**
             * Query defines the URL for the error page (hosted by service).
             * The {status} variable can be used in order to insert the status code in the URL.
             * The {originalStatus} variable can be used in order to insert the upstream status code in the URL.
             * The {url} variable can be used in order to insert the escaped request URL.
             */
            query: string;
            service: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServicePatch;
            /**
             * Status defines which status or range of statuses should result in an error page.
             * It can be either a status code as a number (500),
             * as multiple comma-separated numbers (500,502),
             * as ranges by separating two codes with a dash (500-599),
             * or a combination of the two (404,418,500-599).
             */
            status: string[];
            /**
             * StatusRewrites defines a mapping of status codes that should be returned instead of the original error status codes.
             * For example: "418": 404 or "410-418": 404
             */
            statusRewrites: {
                [key: string]: number;
            };
        }
        /**
         * Service defines the reference to a Kubernetes Service that will serve the error page.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/errorpages/#service
         */
        interface MiddlewareSpecErrorsService {
            healthCheck: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServiceHealthCheck;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServiceResponseForwarding;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServiceSticky;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface MiddlewareSpecErrorsServiceHealthCheck {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface MiddlewareSpecErrorsServiceHealthCheckPatch {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * Service defines the reference to a Kubernetes Service that will serve the error page.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/errorpages/#service
         */
        interface MiddlewareSpecErrorsServicePatch {
            healthCheck: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServiceHealthCheckPatch;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServiceResponseForwardingPatch;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServiceStickyPatch;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface MiddlewareSpecErrorsServiceResponseForwarding {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface MiddlewareSpecErrorsServiceResponseForwardingPatch {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface MiddlewareSpecErrorsServiceSticky {
            cookie: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServiceStickyCookie;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface MiddlewareSpecErrorsServiceStickyCookie {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface MiddlewareSpecErrorsServiceStickyCookiePatch {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface MiddlewareSpecErrorsServiceStickyPatch {
            cookie: outputs.traefik.v1alpha1.MiddlewareSpecErrorsServiceStickyCookiePatch;
        }
        /**
         * ForwardAuth holds the forward auth middleware configuration.
         * This middleware delegates the request authentication to a Service.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/forwardauth/
         */
        interface MiddlewareSpecForwardAuth {
            /**
             * AddAuthCookiesToResponse defines the list of cookies to copy from the authentication server response to the response.
             */
            addAuthCookiesToResponse: string[];
            /**
             * Address defines the authentication server address.
             */
            address: string;
            /**
             * AuthRequestHeaders defines the list of the headers to copy from the request to the authentication server.
             * If not set or empty then all request headers are passed.
             */
            authRequestHeaders: string[];
            /**
             * AuthResponseHeaders defines the list of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers.
             */
            authResponseHeaders: string[];
            /**
             * AuthResponseHeadersRegex defines the regex to match headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex.
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/forwardauth/#authresponseheadersregex
             */
            authResponseHeadersRegex: string;
            /**
             * ForwardBody defines whether to send the request body to the authentication server.
             */
            forwardBody: boolean;
            /**
             * HeaderField defines a header field to store the authenticated user.
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/forwardauth/#headerfield
             */
            headerField: string;
            /**
             * MaxBodySize defines the maximum body size in bytes allowed to be forwarded to the authentication server.
             */
            maxBodySize: number;
            /**
             * PreserveLocationHeader defines whether to forward the Location header to the client as is or prefix it with the domain name of the authentication server.
             */
            preserveLocationHeader: boolean;
            /**
             * PreserveRequestMethod defines whether to preserve the original request method while forwarding the request to the authentication server.
             */
            preserveRequestMethod: boolean;
            tls: outputs.traefik.v1alpha1.MiddlewareSpecForwardAuthTls;
            /**
             * TrustForwardHeader defines whether to trust (ie: forward) all X-Forwarded-* headers.
             */
            trustForwardHeader: boolean;
        }
        /**
         * ForwardAuth holds the forward auth middleware configuration.
         * This middleware delegates the request authentication to a Service.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/forwardauth/
         */
        interface MiddlewareSpecForwardAuthPatch {
            /**
             * AddAuthCookiesToResponse defines the list of cookies to copy from the authentication server response to the response.
             */
            addAuthCookiesToResponse: string[];
            /**
             * Address defines the authentication server address.
             */
            address: string;
            /**
             * AuthRequestHeaders defines the list of the headers to copy from the request to the authentication server.
             * If not set or empty then all request headers are passed.
             */
            authRequestHeaders: string[];
            /**
             * AuthResponseHeaders defines the list of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers.
             */
            authResponseHeaders: string[];
            /**
             * AuthResponseHeadersRegex defines the regex to match headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex.
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/forwardauth/#authresponseheadersregex
             */
            authResponseHeadersRegex: string;
            /**
             * ForwardBody defines whether to send the request body to the authentication server.
             */
            forwardBody: boolean;
            /**
             * HeaderField defines a header field to store the authenticated user.
             * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/forwardauth/#headerfield
             */
            headerField: string;
            /**
             * MaxBodySize defines the maximum body size in bytes allowed to be forwarded to the authentication server.
             */
            maxBodySize: number;
            /**
             * PreserveLocationHeader defines whether to forward the Location header to the client as is or prefix it with the domain name of the authentication server.
             */
            preserveLocationHeader: boolean;
            /**
             * PreserveRequestMethod defines whether to preserve the original request method while forwarding the request to the authentication server.
             */
            preserveRequestMethod: boolean;
            tls: outputs.traefik.v1alpha1.MiddlewareSpecForwardAuthTlsPatch;
            /**
             * TrustForwardHeader defines whether to trust (ie: forward) all X-Forwarded-* headers.
             */
            trustForwardHeader: boolean;
        }
        /**
         * TLS defines the configuration used to secure the connection to the authentication server.
         */
        interface MiddlewareSpecForwardAuthTls {
            /**
             * Deprecated: TLS client authentication is a server side option (see https://github.com/golang/go/blob/740a490f71d026bb7d2d13cb8fa2d6d6e0572b70/src/crypto/tls/common.go#L634).
             */
            caOptional: boolean;
            /**
             * CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate.
             * The CA certificate is extracted from key `tls.ca` or `ca.crt`.
             */
            caSecret: string;
            /**
             * CertSecret is the name of the referenced Kubernetes Secret containing the client certificate.
             * The client certificate is extracted from the keys `tls.crt` and `tls.key`.
             */
            certSecret: string;
            /**
             * InsecureSkipVerify defines whether the server certificates should be validated.
             */
            insecureSkipVerify: boolean;
        }
        /**
         * TLS defines the configuration used to secure the connection to the authentication server.
         */
        interface MiddlewareSpecForwardAuthTlsPatch {
            /**
             * Deprecated: TLS client authentication is a server side option (see https://github.com/golang/go/blob/740a490f71d026bb7d2d13cb8fa2d6d6e0572b70/src/crypto/tls/common.go#L634).
             */
            caOptional: boolean;
            /**
             * CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate.
             * The CA certificate is extracted from key `tls.ca` or `ca.crt`.
             */
            caSecret: string;
            /**
             * CertSecret is the name of the referenced Kubernetes Secret containing the client certificate.
             * The client certificate is extracted from the keys `tls.crt` and `tls.key`.
             */
            certSecret: string;
            /**
             * InsecureSkipVerify defines whether the server certificates should be validated.
             */
            insecureSkipVerify: boolean;
        }
        /**
         * GrpcWeb holds the gRPC web middleware configuration.
         * This middleware converts a gRPC web request to an HTTP/2 gRPC request.
         */
        interface MiddlewareSpecGrpcWeb {
            /**
             * AllowOrigins is a list of allowable origins.
             * Can also be a wildcard origin "*".
             */
            allowOrigins: string[];
        }
        /**
         * GrpcWeb holds the gRPC web middleware configuration.
         * This middleware converts a gRPC web request to an HTTP/2 gRPC request.
         */
        interface MiddlewareSpecGrpcWebPatch {
            /**
             * AllowOrigins is a list of allowable origins.
             * Can also be a wildcard origin "*".
             */
            allowOrigins: string[];
        }
        /**
         * Headers holds the headers middleware configuration.
         * This middleware manages the requests and responses headers.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/headers/#customrequestheaders
         */
        interface MiddlewareSpecHeaders {
            /**
             * AccessControlAllowCredentials defines whether the request can include user credentials.
             */
            accessControlAllowCredentials: boolean;
            /**
             * AccessControlAllowHeaders defines the Access-Control-Request-Headers values sent in preflight response.
             */
            accessControlAllowHeaders: string[];
            /**
             * AccessControlAllowMethods defines the Access-Control-Request-Method values sent in preflight response.
             */
            accessControlAllowMethods: string[];
            /**
             * AccessControlAllowOriginList is a list of allowable origins. Can also be a wildcard origin "*".
             */
            accessControlAllowOriginList: string[];
            /**
             * AccessControlAllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).
             */
            accessControlAllowOriginListRegex: string[];
            /**
             * AccessControlExposeHeaders defines the Access-Control-Expose-Headers values sent in preflight response.
             */
            accessControlExposeHeaders: string[];
            /**
             * AccessControlMaxAge defines the time that a preflight request may be cached.
             */
            accessControlMaxAge: number;
            /**
             * AddVaryHeader defines whether the Vary header is automatically added/updated when the AccessControlAllowOriginList is set.
             */
            addVaryHeader: boolean;
            /**
             * AllowedHosts defines the fully qualified list of allowed domain names.
             */
            allowedHosts: string[];
            /**
             * BrowserXSSFilter defines whether to add the X-XSS-Protection header with the value 1; mode=block.
             */
            browserXssFilter: boolean;
            /**
             * ContentSecurityPolicy defines the Content-Security-Policy header value.
             */
            contentSecurityPolicy: string;
            /**
             * ContentSecurityPolicyReportOnly defines the Content-Security-Policy-Report-Only header value.
             */
            contentSecurityPolicyReportOnly: string;
            /**
             * ContentTypeNosniff defines whether to add the X-Content-Type-Options header with the nosniff value.
             */
            contentTypeNosniff: boolean;
            /**
             * CustomBrowserXSSValue defines the X-XSS-Protection header value.
             * This overrides the BrowserXssFilter option.
             */
            customBrowserXSSValue: string;
            /**
             * CustomFrameOptionsValue defines the X-Frame-Options header value.
             * This overrides the FrameDeny option.
             */
            customFrameOptionsValue: string;
            /**
             * CustomRequestHeaders defines the header names and values to apply to the request.
             */
            customRequestHeaders: {
                [key: string]: string;
            };
            /**
             * CustomResponseHeaders defines the header names and values to apply to the response.
             */
            customResponseHeaders: {
                [key: string]: string;
            };
            /**
             * Deprecated: FeaturePolicy option is deprecated, please use PermissionsPolicy instead.
             */
            featurePolicy: string;
            /**
             * ForceSTSHeader defines whether to add the STS header even when the connection is HTTP.
             */
            forceSTSHeader: boolean;
            /**
             * FrameDeny defines whether to add the X-Frame-Options header with the DENY value.
             */
            frameDeny: boolean;
            /**
             * HostsProxyHeaders defines the header keys that may hold a proxied hostname value for the request.
             */
            hostsProxyHeaders: string[];
            /**
             * IsDevelopment defines whether to mitigate the unwanted effects of the AllowedHosts, SSL, and STS options when developing.
             * Usually testing takes place using HTTP, not HTTPS, and on localhost, not your production domain.
             * If you would like your development environment to mimic production with complete Host blocking, SSL redirects,
             * and STS headers, leave this as false.
             */
            isDevelopment: boolean;
            /**
             * PermissionsPolicy defines the Permissions-Policy header value.
             * This allows sites to control browser features.
             */
            permissionsPolicy: string;
            /**
             * PublicKey is the public key that implements HPKP to prevent MITM attacks with forged certificates.
             */
            publicKey: string;
            /**
             * ReferrerPolicy defines the Referrer-Policy header value.
             * This allows sites to control whether browsers forward the Referer header to other sites.
             */
            referrerPolicy: string;
            /**
             * Deprecated: SSLForceHost option is deprecated, please use RedirectRegex instead.
             */
            sslForceHost: boolean;
            /**
             * Deprecated: SSLHost option is deprecated, please use RedirectRegex instead.
             */
            sslHost: string;
            /**
             * SSLProxyHeaders defines the header keys with associated values that would indicate a valid HTTPS request.
             * It can be useful when using other proxies (example: "X-Forwarded-Proto": "https").
             */
            sslProxyHeaders: {
                [key: string]: string;
            };
            /**
             * Deprecated: SSLRedirect option is deprecated, please use EntryPoint redirection or RedirectScheme instead.
             */
            sslRedirect: boolean;
            /**
             * Deprecated: SSLTemporaryRedirect option is deprecated, please use EntryPoint redirection or RedirectScheme instead.
             */
            sslTemporaryRedirect: boolean;
            /**
             * STSIncludeSubdomains defines whether the includeSubDomains directive is appended to the Strict-Transport-Security header.
             */
            stsIncludeSubdomains: boolean;
            /**
             * STSPreload defines whether the preload flag is appended to the Strict-Transport-Security header.
             */
            stsPreload: boolean;
            /**
             * STSSeconds defines the max-age of the Strict-Transport-Security header.
             * If set to 0, the header is not set.
             */
            stsSeconds: number;
        }
        /**
         * Headers holds the headers middleware configuration.
         * This middleware manages the requests and responses headers.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/headers/#customrequestheaders
         */
        interface MiddlewareSpecHeadersPatch {
            /**
             * AccessControlAllowCredentials defines whether the request can include user credentials.
             */
            accessControlAllowCredentials: boolean;
            /**
             * AccessControlAllowHeaders defines the Access-Control-Request-Headers values sent in preflight response.
             */
            accessControlAllowHeaders: string[];
            /**
             * AccessControlAllowMethods defines the Access-Control-Request-Method values sent in preflight response.
             */
            accessControlAllowMethods: string[];
            /**
             * AccessControlAllowOriginList is a list of allowable origins. Can also be a wildcard origin "*".
             */
            accessControlAllowOriginList: string[];
            /**
             * AccessControlAllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).
             */
            accessControlAllowOriginListRegex: string[];
            /**
             * AccessControlExposeHeaders defines the Access-Control-Expose-Headers values sent in preflight response.
             */
            accessControlExposeHeaders: string[];
            /**
             * AccessControlMaxAge defines the time that a preflight request may be cached.
             */
            accessControlMaxAge: number;
            /**
             * AddVaryHeader defines whether the Vary header is automatically added/updated when the AccessControlAllowOriginList is set.
             */
            addVaryHeader: boolean;
            /**
             * AllowedHosts defines the fully qualified list of allowed domain names.
             */
            allowedHosts: string[];
            /**
             * BrowserXSSFilter defines whether to add the X-XSS-Protection header with the value 1; mode=block.
             */
            browserXssFilter: boolean;
            /**
             * ContentSecurityPolicy defines the Content-Security-Policy header value.
             */
            contentSecurityPolicy: string;
            /**
             * ContentSecurityPolicyReportOnly defines the Content-Security-Policy-Report-Only header value.
             */
            contentSecurityPolicyReportOnly: string;
            /**
             * ContentTypeNosniff defines whether to add the X-Content-Type-Options header with the nosniff value.
             */
            contentTypeNosniff: boolean;
            /**
             * CustomBrowserXSSValue defines the X-XSS-Protection header value.
             * This overrides the BrowserXssFilter option.
             */
            customBrowserXSSValue: string;
            /**
             * CustomFrameOptionsValue defines the X-Frame-Options header value.
             * This overrides the FrameDeny option.
             */
            customFrameOptionsValue: string;
            /**
             * CustomRequestHeaders defines the header names and values to apply to the request.
             */
            customRequestHeaders: {
                [key: string]: string;
            };
            /**
             * CustomResponseHeaders defines the header names and values to apply to the response.
             */
            customResponseHeaders: {
                [key: string]: string;
            };
            /**
             * Deprecated: FeaturePolicy option is deprecated, please use PermissionsPolicy instead.
             */
            featurePolicy: string;
            /**
             * ForceSTSHeader defines whether to add the STS header even when the connection is HTTP.
             */
            forceSTSHeader: boolean;
            /**
             * FrameDeny defines whether to add the X-Frame-Options header with the DENY value.
             */
            frameDeny: boolean;
            /**
             * HostsProxyHeaders defines the header keys that may hold a proxied hostname value for the request.
             */
            hostsProxyHeaders: string[];
            /**
             * IsDevelopment defines whether to mitigate the unwanted effects of the AllowedHosts, SSL, and STS options when developing.
             * Usually testing takes place using HTTP, not HTTPS, and on localhost, not your production domain.
             * If you would like your development environment to mimic production with complete Host blocking, SSL redirects,
             * and STS headers, leave this as false.
             */
            isDevelopment: boolean;
            /**
             * PermissionsPolicy defines the Permissions-Policy header value.
             * This allows sites to control browser features.
             */
            permissionsPolicy: string;
            /**
             * PublicKey is the public key that implements HPKP to prevent MITM attacks with forged certificates.
             */
            publicKey: string;
            /**
             * ReferrerPolicy defines the Referrer-Policy header value.
             * This allows sites to control whether browsers forward the Referer header to other sites.
             */
            referrerPolicy: string;
            /**
             * Deprecated: SSLForceHost option is deprecated, please use RedirectRegex instead.
             */
            sslForceHost: boolean;
            /**
             * Deprecated: SSLHost option is deprecated, please use RedirectRegex instead.
             */
            sslHost: string;
            /**
             * SSLProxyHeaders defines the header keys with associated values that would indicate a valid HTTPS request.
             * It can be useful when using other proxies (example: "X-Forwarded-Proto": "https").
             */
            sslProxyHeaders: {
                [key: string]: string;
            };
            /**
             * Deprecated: SSLRedirect option is deprecated, please use EntryPoint redirection or RedirectScheme instead.
             */
            sslRedirect: boolean;
            /**
             * Deprecated: SSLTemporaryRedirect option is deprecated, please use EntryPoint redirection or RedirectScheme instead.
             */
            sslTemporaryRedirect: boolean;
            /**
             * STSIncludeSubdomains defines whether the includeSubDomains directive is appended to the Strict-Transport-Security header.
             */
            stsIncludeSubdomains: boolean;
            /**
             * STSPreload defines whether the preload flag is appended to the Strict-Transport-Security header.
             */
            stsPreload: boolean;
            /**
             * STSSeconds defines the max-age of the Strict-Transport-Security header.
             * If set to 0, the header is not set.
             */
            stsSeconds: number;
        }
        /**
         * InFlightReq holds the in-flight request middleware configuration.
         * This middleware limits the number of requests being processed and served concurrently.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/inflightreq/
         */
        interface MiddlewareSpecInFlightReq {
            /**
             * Amount defines the maximum amount of allowed simultaneous in-flight request.
             * The middleware responds with HTTP 429 Too Many Requests if there are already amount requests in progress (based on the same sourceCriterion strategy).
             */
            amount: number;
            sourceCriterion: outputs.traefik.v1alpha1.MiddlewareSpecInFlightReqSourceCriterion;
        }
        /**
         * InFlightReq holds the in-flight request middleware configuration.
         * This middleware limits the number of requests being processed and served concurrently.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/inflightreq/
         */
        interface MiddlewareSpecInFlightReqPatch {
            /**
             * Amount defines the maximum amount of allowed simultaneous in-flight request.
             * The middleware responds with HTTP 429 Too Many Requests if there are already amount requests in progress (based on the same sourceCriterion strategy).
             */
            amount: number;
            sourceCriterion: outputs.traefik.v1alpha1.MiddlewareSpecInFlightReqSourceCriterionPatch;
        }
        /**
         * SourceCriterion defines what criterion is used to group requests as originating from a common source.
         * If several strategies are defined at the same time, an error will be raised.
         * If none are set, the default is to use the requestHost.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/inflightreq/#sourcecriterion
         */
        interface MiddlewareSpecInFlightReqSourceCriterion {
            ipStrategy: outputs.traefik.v1alpha1.MiddlewareSpecInFlightReqSourceCriterionIpStrategy;
            /**
             * RequestHeaderName defines the name of the header used to group incoming requests.
             */
            requestHeaderName: string;
            /**
             * RequestHost defines whether to consider the request Host as the source.
             */
            requestHost: boolean;
        }
        /**
         * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/#ipstrategy
         */
        interface MiddlewareSpecInFlightReqSourceCriterionIpStrategy {
            /**
             * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
             */
            depth: number;
            /**
             * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
             */
            excludedIPs: string[];
            /**
             * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
             */
            ipv6Subnet: number;
        }
        /**
         * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/#ipstrategy
         */
        interface MiddlewareSpecInFlightReqSourceCriterionIpStrategyPatch {
            /**
             * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
             */
            depth: number;
            /**
             * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
             */
            excludedIPs: string[];
            /**
             * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
             */
            ipv6Subnet: number;
        }
        /**
         * SourceCriterion defines what criterion is used to group requests as originating from a common source.
         * If several strategies are defined at the same time, an error will be raised.
         * If none are set, the default is to use the requestHost.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/inflightreq/#sourcecriterion
         */
        interface MiddlewareSpecInFlightReqSourceCriterionPatch {
            ipStrategy: outputs.traefik.v1alpha1.MiddlewareSpecInFlightReqSourceCriterionIpStrategyPatch;
            /**
             * RequestHeaderName defines the name of the header used to group incoming requests.
             */
            requestHeaderName: string;
            /**
             * RequestHost defines whether to consider the request Host as the source.
             */
            requestHost: boolean;
        }
        /**
         * IPAllowList holds the IP allowlist middleware configuration.
         * This middleware limits allowed requests based on the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/
         */
        interface MiddlewareSpecIpAllowList {
            ipStrategy: outputs.traefik.v1alpha1.MiddlewareSpecIpAllowListIpStrategy;
            /**
             * RejectStatusCode defines the HTTP status code used for refused requests.
             * If not set, the default is 403 (Forbidden).
             */
            rejectStatusCode: number;
            /**
             * SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation).
             */
            sourceRange: string[];
        }
        /**
         * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/#ipstrategy
         */
        interface MiddlewareSpecIpAllowListIpStrategy {
            /**
             * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
             */
            depth: number;
            /**
             * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
             */
            excludedIPs: string[];
            /**
             * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
             */
            ipv6Subnet: number;
        }
        /**
         * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/#ipstrategy
         */
        interface MiddlewareSpecIpAllowListIpStrategyPatch {
            /**
             * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
             */
            depth: number;
            /**
             * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
             */
            excludedIPs: string[];
            /**
             * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
             */
            ipv6Subnet: number;
        }
        /**
         * IPAllowList holds the IP allowlist middleware configuration.
         * This middleware limits allowed requests based on the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/
         */
        interface MiddlewareSpecIpAllowListPatch {
            ipStrategy: outputs.traefik.v1alpha1.MiddlewareSpecIpAllowListIpStrategyPatch;
            /**
             * RejectStatusCode defines the HTTP status code used for refused requests.
             * If not set, the default is 403 (Forbidden).
             */
            rejectStatusCode: number;
            /**
             * SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation).
             */
            sourceRange: string[];
        }
        /**
         * Deprecated: please use IPAllowList instead.
         */
        interface MiddlewareSpecIpWhiteList {
            ipStrategy: outputs.traefik.v1alpha1.MiddlewareSpecIpWhiteListIpStrategy;
            /**
             * SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation). Required.
             */
            sourceRange: string[];
        }
        /**
         * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/#ipstrategy
         */
        interface MiddlewareSpecIpWhiteListIpStrategy {
            /**
             * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
             */
            depth: number;
            /**
             * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
             */
            excludedIPs: string[];
            /**
             * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
             */
            ipv6Subnet: number;
        }
        /**
         * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/#ipstrategy
         */
        interface MiddlewareSpecIpWhiteListIpStrategyPatch {
            /**
             * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
             */
            depth: number;
            /**
             * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
             */
            excludedIPs: string[];
            /**
             * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
             */
            ipv6Subnet: number;
        }
        /**
         * Deprecated: please use IPAllowList instead.
         */
        interface MiddlewareSpecIpWhiteListPatch {
            ipStrategy: outputs.traefik.v1alpha1.MiddlewareSpecIpWhiteListIpStrategyPatch;
            /**
             * SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation). Required.
             */
            sourceRange: string[];
        }
        /**
         * PassTLSClientCert holds the pass TLS client cert middleware configuration.
         * This middleware adds the selected data from the passed client TLS certificate to a header.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/passtlsclientcert/
         */
        interface MiddlewareSpecPassTLSClientCert {
            info: outputs.traefik.v1alpha1.MiddlewareSpecPassTLSClientCertInfo;
            /**
             * PEM sets the X-Forwarded-Tls-Client-Cert header with the certificate.
             */
            pem: boolean;
        }
        /**
         * Info selects the specific client certificate details you want to add to the X-Forwarded-Tls-Client-Cert-Info header.
         */
        interface MiddlewareSpecPassTLSClientCertInfo {
            issuer: outputs.traefik.v1alpha1.MiddlewareSpecPassTLSClientCertInfoIssuer;
            /**
             * NotAfter defines whether to add the Not After information from the Validity part.
             */
            notAfter: boolean;
            /**
             * NotBefore defines whether to add the Not Before information from the Validity part.
             */
            notBefore: boolean;
            /**
             * Sans defines whether to add the Subject Alternative Name information from the Subject Alternative Name part.
             */
            sans: boolean;
            /**
             * SerialNumber defines whether to add the client serialNumber information.
             */
            serialNumber: boolean;
            subject: outputs.traefik.v1alpha1.MiddlewareSpecPassTLSClientCertInfoSubject;
        }
        /**
         * Issuer defines the client certificate issuer details to add to the X-Forwarded-Tls-Client-Cert-Info header.
         */
        interface MiddlewareSpecPassTLSClientCertInfoIssuer {
            /**
             * CommonName defines whether to add the organizationalUnit information into the issuer.
             */
            commonName: boolean;
            /**
             * Country defines whether to add the country information into the issuer.
             */
            country: boolean;
            /**
             * DomainComponent defines whether to add the domainComponent information into the issuer.
             */
            domainComponent: boolean;
            /**
             * Locality defines whether to add the locality information into the issuer.
             */
            locality: boolean;
            /**
             * Organization defines whether to add the organization information into the issuer.
             */
            organization: boolean;
            /**
             * Province defines whether to add the province information into the issuer.
             */
            province: boolean;
            /**
             * SerialNumber defines whether to add the serialNumber information into the issuer.
             */
            serialNumber: boolean;
        }
        /**
         * Issuer defines the client certificate issuer details to add to the X-Forwarded-Tls-Client-Cert-Info header.
         */
        interface MiddlewareSpecPassTLSClientCertInfoIssuerPatch {
            /**
             * CommonName defines whether to add the organizationalUnit information into the issuer.
             */
            commonName: boolean;
            /**
             * Country defines whether to add the country information into the issuer.
             */
            country: boolean;
            /**
             * DomainComponent defines whether to add the domainComponent information into the issuer.
             */
            domainComponent: boolean;
            /**
             * Locality defines whether to add the locality information into the issuer.
             */
            locality: boolean;
            /**
             * Organization defines whether to add the organization information into the issuer.
             */
            organization: boolean;
            /**
             * Province defines whether to add the province information into the issuer.
             */
            province: boolean;
            /**
             * SerialNumber defines whether to add the serialNumber information into the issuer.
             */
            serialNumber: boolean;
        }
        /**
         * Info selects the specific client certificate details you want to add to the X-Forwarded-Tls-Client-Cert-Info header.
         */
        interface MiddlewareSpecPassTLSClientCertInfoPatch {
            issuer: outputs.traefik.v1alpha1.MiddlewareSpecPassTLSClientCertInfoIssuerPatch;
            /**
             * NotAfter defines whether to add the Not After information from the Validity part.
             */
            notAfter: boolean;
            /**
             * NotBefore defines whether to add the Not Before information from the Validity part.
             */
            notBefore: boolean;
            /**
             * Sans defines whether to add the Subject Alternative Name information from the Subject Alternative Name part.
             */
            sans: boolean;
            /**
             * SerialNumber defines whether to add the client serialNumber information.
             */
            serialNumber: boolean;
            subject: outputs.traefik.v1alpha1.MiddlewareSpecPassTLSClientCertInfoSubjectPatch;
        }
        /**
         * Subject defines the client certificate subject details to add to the X-Forwarded-Tls-Client-Cert-Info header.
         */
        interface MiddlewareSpecPassTLSClientCertInfoSubject {
            /**
             * CommonName defines whether to add the organizationalUnit information into the subject.
             */
            commonName: boolean;
            /**
             * Country defines whether to add the country information into the subject.
             */
            country: boolean;
            /**
             * DomainComponent defines whether to add the domainComponent information into the subject.
             */
            domainComponent: boolean;
            /**
             * Locality defines whether to add the locality information into the subject.
             */
            locality: boolean;
            /**
             * Organization defines whether to add the organization information into the subject.
             */
            organization: boolean;
            /**
             * OrganizationalUnit defines whether to add the organizationalUnit information into the subject.
             */
            organizationalUnit: boolean;
            /**
             * Province defines whether to add the province information into the subject.
             */
            province: boolean;
            /**
             * SerialNumber defines whether to add the serialNumber information into the subject.
             */
            serialNumber: boolean;
        }
        /**
         * Subject defines the client certificate subject details to add to the X-Forwarded-Tls-Client-Cert-Info header.
         */
        interface MiddlewareSpecPassTLSClientCertInfoSubjectPatch {
            /**
             * CommonName defines whether to add the organizationalUnit information into the subject.
             */
            commonName: boolean;
            /**
             * Country defines whether to add the country information into the subject.
             */
            country: boolean;
            /**
             * DomainComponent defines whether to add the domainComponent information into the subject.
             */
            domainComponent: boolean;
            /**
             * Locality defines whether to add the locality information into the subject.
             */
            locality: boolean;
            /**
             * Organization defines whether to add the organization information into the subject.
             */
            organization: boolean;
            /**
             * OrganizationalUnit defines whether to add the organizationalUnit information into the subject.
             */
            organizationalUnit: boolean;
            /**
             * Province defines whether to add the province information into the subject.
             */
            province: boolean;
            /**
             * SerialNumber defines whether to add the serialNumber information into the subject.
             */
            serialNumber: boolean;
        }
        /**
         * PassTLSClientCert holds the pass TLS client cert middleware configuration.
         * This middleware adds the selected data from the passed client TLS certificate to a header.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/passtlsclientcert/
         */
        interface MiddlewareSpecPassTLSClientCertPatch {
            info: outputs.traefik.v1alpha1.MiddlewareSpecPassTLSClientCertInfoPatch;
            /**
             * PEM sets the X-Forwarded-Tls-Client-Cert header with the certificate.
             */
            pem: boolean;
        }
        /**
         * MiddlewareSpec defines the desired state of a Middleware.
         */
        interface MiddlewareSpecPatch {
            addPrefix: outputs.traefik.v1alpha1.MiddlewareSpecAddPrefixPatch;
            basicAuth: outputs.traefik.v1alpha1.MiddlewareSpecBasicAuthPatch;
            buffering: outputs.traefik.v1alpha1.MiddlewareSpecBufferingPatch;
            chain: outputs.traefik.v1alpha1.MiddlewareSpecChainPatch;
            circuitBreaker: outputs.traefik.v1alpha1.MiddlewareSpecCircuitBreakerPatch;
            compress: outputs.traefik.v1alpha1.MiddlewareSpecCompressPatch;
            contentType: outputs.traefik.v1alpha1.MiddlewareSpecContentTypePatch;
            digestAuth: outputs.traefik.v1alpha1.MiddlewareSpecDigestAuthPatch;
            errors: outputs.traefik.v1alpha1.MiddlewareSpecErrorsPatch;
            forwardAuth: outputs.traefik.v1alpha1.MiddlewareSpecForwardAuthPatch;
            grpcWeb: outputs.traefik.v1alpha1.MiddlewareSpecGrpcWebPatch;
            headers: outputs.traefik.v1alpha1.MiddlewareSpecHeadersPatch;
            inFlightReq: outputs.traefik.v1alpha1.MiddlewareSpecInFlightReqPatch;
            ipAllowList: outputs.traefik.v1alpha1.MiddlewareSpecIpAllowListPatch;
            ipWhiteList: outputs.traefik.v1alpha1.MiddlewareSpecIpWhiteListPatch;
            passTLSClientCert: outputs.traefik.v1alpha1.MiddlewareSpecPassTLSClientCertPatch;
            /**
             * Plugin defines the middleware plugin configuration.
             * More info: https://doc.traefik.io/traefik/plugins/
             */
            plugin: {
                [key: string]: {
                    [key: string]: any;
                };
            };
            rateLimit: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitPatch;
            redirectRegex: outputs.traefik.v1alpha1.MiddlewareSpecRedirectRegexPatch;
            redirectScheme: outputs.traefik.v1alpha1.MiddlewareSpecRedirectSchemePatch;
            replacePath: outputs.traefik.v1alpha1.MiddlewareSpecReplacePathPatch;
            replacePathRegex: outputs.traefik.v1alpha1.MiddlewareSpecReplacePathRegexPatch;
            retry: outputs.traefik.v1alpha1.MiddlewareSpecRetryPatch;
            stripPrefix: outputs.traefik.v1alpha1.MiddlewareSpecStripPrefixPatch;
            stripPrefixRegex: outputs.traefik.v1alpha1.MiddlewareSpecStripPrefixRegexPatch;
        }
        /**
         * RateLimit holds the rate limit configuration.
         * This middleware ensures that services will receive a fair amount of requests, and allows one to define what fair is.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ratelimit/
         */
        interface MiddlewareSpecRateLimit {
            /**
             * Average is the maximum rate, by default in requests/s, allowed for the given source.
             * It defaults to 0, which means no rate limiting.
             * The rate is actually defined by dividing Average by Period. So for a rate below 1req/s,
             * one needs to define a Period larger than a second.
             */
            average: number;
            /**
             * Burst is the maximum number of requests allowed to arrive in the same arbitrarily small period of time.
             * It defaults to 1.
             */
            burst: number;
            /**
             * Period, in combination with Average, defines the actual maximum rate, such as:
             * r = Average / Period. It defaults to a second.
             */
            period: number | string;
            redis: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitRedis;
            sourceCriterion: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitSourceCriterion;
        }
        /**
         * RateLimit holds the rate limit configuration.
         * This middleware ensures that services will receive a fair amount of requests, and allows one to define what fair is.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ratelimit/
         */
        interface MiddlewareSpecRateLimitPatch {
            /**
             * Average is the maximum rate, by default in requests/s, allowed for the given source.
             * It defaults to 0, which means no rate limiting.
             * The rate is actually defined by dividing Average by Period. So for a rate below 1req/s,
             * one needs to define a Period larger than a second.
             */
            average: number;
            /**
             * Burst is the maximum number of requests allowed to arrive in the same arbitrarily small period of time.
             * It defaults to 1.
             */
            burst: number;
            /**
             * Period, in combination with Average, defines the actual maximum rate, such as:
             * r = Average / Period. It defaults to a second.
             */
            period: number | string;
            redis: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitRedisPatch;
            sourceCriterion: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitSourceCriterionPatch;
        }
        /**
         * Redis hold the configs of Redis as bucket in rate limiter.
         */
        interface MiddlewareSpecRateLimitRedis {
            /**
             * DB defines the Redis database that will be selected after connecting to the server.
             */
            db: number;
            /**
             * DialTimeout sets the timeout for establishing new connections.
             * Default value is 5 seconds.
             */
            dialTimeout: number | string;
            /**
             * Endpoints contains either a single address or a seed list of host:port addresses.
             * Default value is ["localhost:6379"].
             */
            endpoints: string[];
            /**
             * MaxActiveConns defines the maximum number of connections allocated by the pool at a given time.
             * Default value is 0, meaning there is no limit.
             */
            maxActiveConns: number;
            /**
             * MinIdleConns defines the minimum number of idle connections.
             * Default value is 0, and idle connections are not closed by default.
             */
            minIdleConns: number;
            /**
             * PoolSize defines the initial number of socket connections.
             * If the pool runs out of available connections, additional ones will be created beyond PoolSize.
             * This can be limited using MaxActiveConns.
             * // Default value is 0, meaning 10 connections per every available CPU as reported by runtime.GOMAXPROCS.
             */
            poolSize: number;
            /**
             * ReadTimeout defines the timeout for socket read operations.
             * Default value is 3 seconds.
             */
            readTimeout: number | string;
            /**
             * Secret defines the name of the referenced Kubernetes Secret containing Redis credentials.
             */
            secret: string;
            tls: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitRedisTls;
            /**
             * WriteTimeout defines the timeout for socket write operations.
             * Default value is 3 seconds.
             */
            writeTimeout: number | string;
        }
        /**
         * Redis hold the configs of Redis as bucket in rate limiter.
         */
        interface MiddlewareSpecRateLimitRedisPatch {
            /**
             * DB defines the Redis database that will be selected after connecting to the server.
             */
            db: number;
            /**
             * DialTimeout sets the timeout for establishing new connections.
             * Default value is 5 seconds.
             */
            dialTimeout: number | string;
            /**
             * Endpoints contains either a single address or a seed list of host:port addresses.
             * Default value is ["localhost:6379"].
             */
            endpoints: string[];
            /**
             * MaxActiveConns defines the maximum number of connections allocated by the pool at a given time.
             * Default value is 0, meaning there is no limit.
             */
            maxActiveConns: number;
            /**
             * MinIdleConns defines the minimum number of idle connections.
             * Default value is 0, and idle connections are not closed by default.
             */
            minIdleConns: number;
            /**
             * PoolSize defines the initial number of socket connections.
             * If the pool runs out of available connections, additional ones will be created beyond PoolSize.
             * This can be limited using MaxActiveConns.
             * // Default value is 0, meaning 10 connections per every available CPU as reported by runtime.GOMAXPROCS.
             */
            poolSize: number;
            /**
             * ReadTimeout defines the timeout for socket read operations.
             * Default value is 3 seconds.
             */
            readTimeout: number | string;
            /**
             * Secret defines the name of the referenced Kubernetes Secret containing Redis credentials.
             */
            secret: string;
            tls: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitRedisTlsPatch;
            /**
             * WriteTimeout defines the timeout for socket write operations.
             * Default value is 3 seconds.
             */
            writeTimeout: number | string;
        }
        /**
         * TLS defines TLS-specific configurations, including the CA, certificate, and key,
         * which can be provided as a file path or file content.
         */
        interface MiddlewareSpecRateLimitRedisTls {
            /**
             * CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate.
             * The CA certificate is extracted from key `tls.ca` or `ca.crt`.
             */
            caSecret: string;
            /**
             * CertSecret is the name of the referenced Kubernetes Secret containing the client certificate.
             * The client certificate is extracted from the keys `tls.crt` and `tls.key`.
             */
            certSecret: string;
            /**
             * InsecureSkipVerify defines whether the server certificates should be validated.
             */
            insecureSkipVerify: boolean;
        }
        /**
         * TLS defines TLS-specific configurations, including the CA, certificate, and key,
         * which can be provided as a file path or file content.
         */
        interface MiddlewareSpecRateLimitRedisTlsPatch {
            /**
             * CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate.
             * The CA certificate is extracted from key `tls.ca` or `ca.crt`.
             */
            caSecret: string;
            /**
             * CertSecret is the name of the referenced Kubernetes Secret containing the client certificate.
             * The client certificate is extracted from the keys `tls.crt` and `tls.key`.
             */
            certSecret: string;
            /**
             * InsecureSkipVerify defines whether the server certificates should be validated.
             */
            insecureSkipVerify: boolean;
        }
        /**
         * SourceCriterion defines what criterion is used to group requests as originating from a common source.
         * If several strategies are defined at the same time, an error will be raised.
         * If none are set, the default is to use the request's remote address field (as an ipStrategy).
         */
        interface MiddlewareSpecRateLimitSourceCriterion {
            ipStrategy: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitSourceCriterionIpStrategy;
            /**
             * RequestHeaderName defines the name of the header used to group incoming requests.
             */
            requestHeaderName: string;
            /**
             * RequestHost defines whether to consider the request Host as the source.
             */
            requestHost: boolean;
        }
        /**
         * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/#ipstrategy
         */
        interface MiddlewareSpecRateLimitSourceCriterionIpStrategy {
            /**
             * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
             */
            depth: number;
            /**
             * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
             */
            excludedIPs: string[];
            /**
             * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
             */
            ipv6Subnet: number;
        }
        /**
         * IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/ipallowlist/#ipstrategy
         */
        interface MiddlewareSpecRateLimitSourceCriterionIpStrategyPatch {
            /**
             * Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).
             */
            depth: number;
            /**
             * ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.
             */
            excludedIPs: string[];
            /**
             * IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.
             */
            ipv6Subnet: number;
        }
        /**
         * SourceCriterion defines what criterion is used to group requests as originating from a common source.
         * If several strategies are defined at the same time, an error will be raised.
         * If none are set, the default is to use the request's remote address field (as an ipStrategy).
         */
        interface MiddlewareSpecRateLimitSourceCriterionPatch {
            ipStrategy: outputs.traefik.v1alpha1.MiddlewareSpecRateLimitSourceCriterionIpStrategyPatch;
            /**
             * RequestHeaderName defines the name of the header used to group incoming requests.
             */
            requestHeaderName: string;
            /**
             * RequestHost defines whether to consider the request Host as the source.
             */
            requestHost: boolean;
        }
        /**
         * RedirectRegex holds the redirect regex middleware configuration.
         * This middleware redirects a request using regex matching and replacement.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/redirectregex/#regex
         */
        interface MiddlewareSpecRedirectRegex {
            /**
             * Permanent defines whether the redirection is permanent (308).
             */
            permanent: boolean;
            /**
             * Regex defines the regex used to match and capture elements from the request URL.
             */
            regex: string;
            /**
             * Replacement defines how to modify the URL to have the new target URL.
             */
            replacement: string;
        }
        /**
         * RedirectRegex holds the redirect regex middleware configuration.
         * This middleware redirects a request using regex matching and replacement.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/redirectregex/#regex
         */
        interface MiddlewareSpecRedirectRegexPatch {
            /**
             * Permanent defines whether the redirection is permanent (308).
             */
            permanent: boolean;
            /**
             * Regex defines the regex used to match and capture elements from the request URL.
             */
            regex: string;
            /**
             * Replacement defines how to modify the URL to have the new target URL.
             */
            replacement: string;
        }
        /**
         * RedirectScheme holds the redirect scheme middleware configuration.
         * This middleware redirects requests from a scheme/port to another.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/redirectscheme/
         */
        interface MiddlewareSpecRedirectScheme {
            /**
             * Permanent defines whether the redirection is permanent (308).
             */
            permanent: boolean;
            /**
             * Port defines the port of the new URL.
             */
            port: string;
            /**
             * Scheme defines the scheme of the new URL.
             */
            scheme: string;
        }
        /**
         * RedirectScheme holds the redirect scheme middleware configuration.
         * This middleware redirects requests from a scheme/port to another.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/redirectscheme/
         */
        interface MiddlewareSpecRedirectSchemePatch {
            /**
             * Permanent defines whether the redirection is permanent (308).
             */
            permanent: boolean;
            /**
             * Port defines the port of the new URL.
             */
            port: string;
            /**
             * Scheme defines the scheme of the new URL.
             */
            scheme: string;
        }
        /**
         * ReplacePath holds the replace path middleware configuration.
         * This middleware replaces the path of the request URL and store the original path in an X-Replaced-Path header.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/replacepath/
         */
        interface MiddlewareSpecReplacePath {
            /**
             * Path defines the path to use as replacement in the request URL.
             */
            path: string;
        }
        /**
         * ReplacePath holds the replace path middleware configuration.
         * This middleware replaces the path of the request URL and store the original path in an X-Replaced-Path header.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/replacepath/
         */
        interface MiddlewareSpecReplacePathPatch {
            /**
             * Path defines the path to use as replacement in the request URL.
             */
            path: string;
        }
        /**
         * ReplacePathRegex holds the replace path regex middleware configuration.
         * This middleware replaces the path of a URL using regex matching and replacement.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/replacepathregex/
         */
        interface MiddlewareSpecReplacePathRegex {
            /**
             * Regex defines the regular expression used to match and capture the path from the request URL.
             */
            regex: string;
            /**
             * Replacement defines the replacement path format, which can include captured variables.
             */
            replacement: string;
        }
        /**
         * ReplacePathRegex holds the replace path regex middleware configuration.
         * This middleware replaces the path of a URL using regex matching and replacement.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/replacepathregex/
         */
        interface MiddlewareSpecReplacePathRegexPatch {
            /**
             * Regex defines the regular expression used to match and capture the path from the request URL.
             */
            regex: string;
            /**
             * Replacement defines the replacement path format, which can include captured variables.
             */
            replacement: string;
        }
        /**
         * Retry holds the retry middleware configuration.
         * This middleware reissues requests a given number of times to a backend server if that server does not reply.
         * As soon as the server answers, the middleware stops retrying, regardless of the response status.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/retry/
         */
        interface MiddlewareSpecRetry {
            /**
             * Attempts defines how many times the request should be retried.
             */
            attempts: number;
            /**
             * InitialInterval defines the first wait time in the exponential backoff series.
             * The maximum interval is calculated as twice the initialInterval.
             * If unspecified, requests will be retried immediately.
             * The value of initialInterval should be provided in seconds or as a valid duration format,
             * see https://pkg.go.dev/time#ParseDuration.
             */
            initialInterval: number | string;
        }
        /**
         * Retry holds the retry middleware configuration.
         * This middleware reissues requests a given number of times to a backend server if that server does not reply.
         * As soon as the server answers, the middleware stops retrying, regardless of the response status.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/retry/
         */
        interface MiddlewareSpecRetryPatch {
            /**
             * Attempts defines how many times the request should be retried.
             */
            attempts: number;
            /**
             * InitialInterval defines the first wait time in the exponential backoff series.
             * The maximum interval is calculated as twice the initialInterval.
             * If unspecified, requests will be retried immediately.
             * The value of initialInterval should be provided in seconds or as a valid duration format,
             * see https://pkg.go.dev/time#ParseDuration.
             */
            initialInterval: number | string;
        }
        /**
         * StripPrefix holds the strip prefix middleware configuration.
         * This middleware removes the specified prefixes from the URL path.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/stripprefix/
         */
        interface MiddlewareSpecStripPrefix {
            /**
             * Deprecated: ForceSlash option is deprecated, please remove any usage of this option.
             * ForceSlash ensures that the resulting stripped path is not the empty string, by replacing it with / when necessary.
             * Default: true.
             */
            forceSlash: boolean;
            /**
             * Prefixes defines the prefixes to strip from the request URL.
             */
            prefixes: string[];
        }
        /**
         * StripPrefix holds the strip prefix middleware configuration.
         * This middleware removes the specified prefixes from the URL path.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/stripprefix/
         */
        interface MiddlewareSpecStripPrefixPatch {
            /**
             * Deprecated: ForceSlash option is deprecated, please remove any usage of this option.
             * ForceSlash ensures that the resulting stripped path is not the empty string, by replacing it with / when necessary.
             * Default: true.
             */
            forceSlash: boolean;
            /**
             * Prefixes defines the prefixes to strip from the request URL.
             */
            prefixes: string[];
        }
        /**
         * StripPrefixRegex holds the strip prefix regex middleware configuration.
         * This middleware removes the matching prefixes from the URL path.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/stripprefixregex/
         */
        interface MiddlewareSpecStripPrefixRegex {
            /**
             * Regex defines the regular expression to match the path prefix from the request URL.
             */
            regex: string[];
        }
        /**
         * StripPrefixRegex holds the strip prefix regex middleware configuration.
         * This middleware removes the matching prefixes from the URL path.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/http/stripprefixregex/
         */
        interface MiddlewareSpecStripPrefixRegexPatch {
            /**
             * Regex defines the regular expression to match the path prefix from the request URL.
             */
            regex: string[];
        }
        /**
         * MiddlewareTCP is the CRD implementation of a Traefik TCP middleware.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/overview/
         */
        interface MiddlewareTCP {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "MiddlewareTCP";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.traefik.v1alpha1.MiddlewareTCPSpec;
        }
        /**
         * MiddlewareTCPSpec defines the desired state of a MiddlewareTCP.
         */
        interface MiddlewareTCPSpec {
            inFlightConn: outputs.traefik.v1alpha1.MiddlewareTCPSpecInFlightConn;
            ipAllowList: outputs.traefik.v1alpha1.MiddlewareTCPSpecIpAllowList;
            ipWhiteList: outputs.traefik.v1alpha1.MiddlewareTCPSpecIpWhiteList;
        }
        /**
         * InFlightConn defines the InFlightConn middleware configuration.
         */
        interface MiddlewareTCPSpecInFlightConn {
            /**
             * Amount defines the maximum amount of allowed simultaneous connections.
             * The middleware closes the connection if there are already amount connections opened.
             */
            amount: number;
        }
        /**
         * InFlightConn defines the InFlightConn middleware configuration.
         */
        interface MiddlewareTCPSpecInFlightConnPatch {
            /**
             * Amount defines the maximum amount of allowed simultaneous connections.
             * The middleware closes the connection if there are already amount connections opened.
             */
            amount: number;
        }
        /**
         * IPAllowList defines the IPAllowList middleware configuration.
         * This middleware accepts/refuses connections based on the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/tcp/ipallowlist/
         */
        interface MiddlewareTCPSpecIpAllowList {
            /**
             * SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).
             */
            sourceRange: string[];
        }
        /**
         * IPAllowList defines the IPAllowList middleware configuration.
         * This middleware accepts/refuses connections based on the client IP.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/tcp/ipallowlist/
         */
        interface MiddlewareTCPSpecIpAllowListPatch {
            /**
             * SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).
             */
            sourceRange: string[];
        }
        /**
         * IPWhiteList defines the IPWhiteList middleware configuration.
         * This middleware accepts/refuses connections based on the client IP.
         * Deprecated: please use IPAllowList instead.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/tcp/ipwhitelist/
         */
        interface MiddlewareTCPSpecIpWhiteList {
            /**
             * SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).
             */
            sourceRange: string[];
        }
        /**
         * IPWhiteList defines the IPWhiteList middleware configuration.
         * This middleware accepts/refuses connections based on the client IP.
         * Deprecated: please use IPAllowList instead.
         * More info: https://doc.traefik.io/traefik/v3.5/middlewares/tcp/ipwhitelist/
         */
        interface MiddlewareTCPSpecIpWhiteListPatch {
            /**
             * SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).
             */
            sourceRange: string[];
        }
        /**
         * MiddlewareTCPSpec defines the desired state of a MiddlewareTCP.
         */
        interface MiddlewareTCPSpecPatch {
            inFlightConn: outputs.traefik.v1alpha1.MiddlewareTCPSpecInFlightConnPatch;
            ipAllowList: outputs.traefik.v1alpha1.MiddlewareTCPSpecIpAllowListPatch;
            ipWhiteList: outputs.traefik.v1alpha1.MiddlewareTCPSpecIpWhiteListPatch;
        }
        /**
         * ServersTransportSpec defines the desired state of a ServersTransport.
         */
        interface ServersTransportSpec {
            /**
             * CertificatesSecrets defines a list of secret storing client certificates for mTLS.
             */
            certificatesSecrets: string[];
            /**
             * DisableHTTP2 disables HTTP/2 for connections with backend servers.
             */
            disableHTTP2: boolean;
            forwardingTimeouts: outputs.traefik.v1alpha1.ServersTransportSpecForwardingTimeouts;
            /**
             * InsecureSkipVerify disables SSL certificate verification.
             */
            insecureSkipVerify: boolean;
            /**
             * MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host.
             */
            maxIdleConnsPerHost: number;
            /**
             * PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.
             */
            peerCertURI: string;
            /**
             * RootCAs defines a list of CA certificate Secrets or ConfigMaps used to validate server certificates.
             */
            rootCAs: outputs.traefik.v1alpha1.ServersTransportSpecRootCAs[];
            /**
             * RootCAsSecrets defines a list of CA secret used to validate self-signed certificate.
             * Deprecated: RootCAsSecrets is deprecated, please use the RootCAs option instead.
             */
            rootCAsSecrets: string[];
            /**
             * ServerName defines the server name used to contact the server.
             */
            serverName: string;
            spiffe: outputs.traefik.v1alpha1.ServersTransportSpecSpiffe;
        }
        /**
         * ForwardingTimeouts defines the timeouts for requests forwarded to the backend servers.
         */
        interface ServersTransportSpecForwardingTimeouts {
            /**
             * DialTimeout is the amount of time to wait until a connection to a backend server can be established.
             */
            dialTimeout: number | string;
            /**
             * IdleConnTimeout is the maximum period for which an idle HTTP keep-alive connection will remain open before closing itself.
             */
            idleConnTimeout: number | string;
            /**
             * PingTimeout is the timeout after which the HTTP/2 connection will be closed if a response to ping is not received.
             */
            pingTimeout: number | string;
            /**
             * ReadIdleTimeout is the timeout after which a health check using ping frame will be carried out if no frame is received on the HTTP/2 connection.
             */
            readIdleTimeout: number | string;
            /**
             * ResponseHeaderTimeout is the amount of time to wait for a server's response headers after fully writing the request (including its body, if any).
             */
            responseHeaderTimeout: number | string;
        }
        /**
         * ForwardingTimeouts defines the timeouts for requests forwarded to the backend servers.
         */
        interface ServersTransportSpecForwardingTimeoutsPatch {
            /**
             * DialTimeout is the amount of time to wait until a connection to a backend server can be established.
             */
            dialTimeout: number | string;
            /**
             * IdleConnTimeout is the maximum period for which an idle HTTP keep-alive connection will remain open before closing itself.
             */
            idleConnTimeout: number | string;
            /**
             * PingTimeout is the timeout after which the HTTP/2 connection will be closed if a response to ping is not received.
             */
            pingTimeout: number | string;
            /**
             * ReadIdleTimeout is the timeout after which a health check using ping frame will be carried out if no frame is received on the HTTP/2 connection.
             */
            readIdleTimeout: number | string;
            /**
             * ResponseHeaderTimeout is the amount of time to wait for a server's response headers after fully writing the request (including its body, if any).
             */
            responseHeaderTimeout: number | string;
        }
        /**
         * ServersTransportSpec defines the desired state of a ServersTransport.
         */
        interface ServersTransportSpecPatch {
            /**
             * CertificatesSecrets defines a list of secret storing client certificates for mTLS.
             */
            certificatesSecrets: string[];
            /**
             * DisableHTTP2 disables HTTP/2 for connections with backend servers.
             */
            disableHTTP2: boolean;
            forwardingTimeouts: outputs.traefik.v1alpha1.ServersTransportSpecForwardingTimeoutsPatch;
            /**
             * InsecureSkipVerify disables SSL certificate verification.
             */
            insecureSkipVerify: boolean;
            /**
             * MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host.
             */
            maxIdleConnsPerHost: number;
            /**
             * PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.
             */
            peerCertURI: string;
            /**
             * RootCAs defines a list of CA certificate Secrets or ConfigMaps used to validate server certificates.
             */
            rootCAs: outputs.traefik.v1alpha1.ServersTransportSpecRootCAsPatch[];
            /**
             * RootCAsSecrets defines a list of CA secret used to validate self-signed certificate.
             * Deprecated: RootCAsSecrets is deprecated, please use the RootCAs option instead.
             */
            rootCAsSecrets: string[];
            /**
             * ServerName defines the server name used to contact the server.
             */
            serverName: string;
            spiffe: outputs.traefik.v1alpha1.ServersTransportSpecSpiffePatch;
        }
        /**
         * RootCA defines a reference to a Secret or a ConfigMap that holds a CA certificate.
         * If both a Secret and a ConfigMap reference are defined, the Secret reference takes precedence.
         */
        interface ServersTransportSpecRootCAs {
            /**
             * ConfigMap defines the name of a ConfigMap that holds a CA certificate.
             * The referenced ConfigMap must contain a certificate under either a tls.ca or a ca.crt key.
             */
            configMap: string;
            /**
             * Secret defines the name of a Secret that holds a CA certificate.
             * The referenced Secret must contain a certificate under either a tls.ca or a ca.crt key.
             */
            secret: string;
        }
        /**
         * RootCA defines a reference to a Secret or a ConfigMap that holds a CA certificate.
         * If both a Secret and a ConfigMap reference are defined, the Secret reference takes precedence.
         */
        interface ServersTransportSpecRootCAsPatch {
            /**
             * ConfigMap defines the name of a ConfigMap that holds a CA certificate.
             * The referenced ConfigMap must contain a certificate under either a tls.ca or a ca.crt key.
             */
            configMap: string;
            /**
             * Secret defines the name of a Secret that holds a CA certificate.
             * The referenced Secret must contain a certificate under either a tls.ca or a ca.crt key.
             */
            secret: string;
        }
        /**
         * Spiffe defines the SPIFFE configuration.
         */
        interface ServersTransportSpecSpiffe {
            /**
             * IDs defines the allowed SPIFFE IDs (takes precedence over the SPIFFE TrustDomain).
             */
            ids: string[];
            /**
             * TrustDomain defines the allowed SPIFFE trust domain.
             */
            trustDomain: string;
        }
        /**
         * Spiffe defines the SPIFFE configuration.
         */
        interface ServersTransportSpecSpiffePatch {
            /**
             * IDs defines the allowed SPIFFE IDs (takes precedence over the SPIFFE TrustDomain).
             */
            ids: string[];
            /**
             * TrustDomain defines the allowed SPIFFE trust domain.
             */
            trustDomain: string;
        }
        /**
         * ServersTransportTCPSpec defines the desired state of a ServersTransportTCP.
         */
        interface ServersTransportTCPSpec {
            /**
             * DialKeepAlive is the interval between keep-alive probes for an active network connection. If zero, keep-alive probes are sent with a default value (currently 15 seconds), if supported by the protocol and operating system. Network protocols or operating systems that do not support keep-alives ignore this field. If negative, keep-alive probes are disabled.
             */
            dialKeepAlive: number | string;
            /**
             * DialTimeout is the amount of time to wait until a connection to a backend server can be established.
             */
            dialTimeout: number | string;
            /**
             * TerminationDelay defines the delay to wait before fully terminating the connection, after one connected peer has closed its writing capability.
             */
            terminationDelay: number | string;
            tls: outputs.traefik.v1alpha1.ServersTransportTCPSpecTls;
        }
        /**
         * ServersTransportTCPSpec defines the desired state of a ServersTransportTCP.
         */
        interface ServersTransportTCPSpecPatch {
            /**
             * DialKeepAlive is the interval between keep-alive probes for an active network connection. If zero, keep-alive probes are sent with a default value (currently 15 seconds), if supported by the protocol and operating system. Network protocols or operating systems that do not support keep-alives ignore this field. If negative, keep-alive probes are disabled.
             */
            dialKeepAlive: number | string;
            /**
             * DialTimeout is the amount of time to wait until a connection to a backend server can be established.
             */
            dialTimeout: number | string;
            /**
             * TerminationDelay defines the delay to wait before fully terminating the connection, after one connected peer has closed its writing capability.
             */
            terminationDelay: number | string;
            tls: outputs.traefik.v1alpha1.ServersTransportTCPSpecTlsPatch;
        }
        /**
         * TLS defines the TLS configuration
         */
        interface ServersTransportTCPSpecTls {
            /**
             * CertificatesSecrets defines a list of secret storing client certificates for mTLS.
             */
            certificatesSecrets: string[];
            /**
             * InsecureSkipVerify disables TLS certificate verification.
             */
            insecureSkipVerify: boolean;
            /**
             * MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host.
             * PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.
             */
            peerCertURI: string;
            /**
             * RootCAs defines a list of CA certificate Secrets or ConfigMaps used to validate server certificates.
             */
            rootCAs: outputs.traefik.v1alpha1.ServersTransportTCPSpecTlsRootCAs[];
            /**
             * RootCAsSecrets defines a list of CA secret used to validate self-signed certificate.
             * Deprecated: RootCAsSecrets is deprecated, please use the RootCAs option instead.
             */
            rootCAsSecrets: string[];
            /**
             * ServerName defines the server name used to contact the server.
             */
            serverName: string;
            spiffe: outputs.traefik.v1alpha1.ServersTransportTCPSpecTlsSpiffe;
        }
        /**
         * TLS defines the TLS configuration
         */
        interface ServersTransportTCPSpecTlsPatch {
            /**
             * CertificatesSecrets defines a list of secret storing client certificates for mTLS.
             */
            certificatesSecrets: string[];
            /**
             * InsecureSkipVerify disables TLS certificate verification.
             */
            insecureSkipVerify: boolean;
            /**
             * MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host.
             * PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.
             */
            peerCertURI: string;
            /**
             * RootCAs defines a list of CA certificate Secrets or ConfigMaps used to validate server certificates.
             */
            rootCAs: outputs.traefik.v1alpha1.ServersTransportTCPSpecTlsRootCAsPatch[];
            /**
             * RootCAsSecrets defines a list of CA secret used to validate self-signed certificate.
             * Deprecated: RootCAsSecrets is deprecated, please use the RootCAs option instead.
             */
            rootCAsSecrets: string[];
            /**
             * ServerName defines the server name used to contact the server.
             */
            serverName: string;
            spiffe: outputs.traefik.v1alpha1.ServersTransportTCPSpecTlsSpiffePatch;
        }
        /**
         * RootCA defines a reference to a Secret or a ConfigMap that holds a CA certificate.
         * If both a Secret and a ConfigMap reference are defined, the Secret reference takes precedence.
         */
        interface ServersTransportTCPSpecTlsRootCAs {
            /**
             * ConfigMap defines the name of a ConfigMap that holds a CA certificate.
             * The referenced ConfigMap must contain a certificate under either a tls.ca or a ca.crt key.
             */
            configMap: string;
            /**
             * Secret defines the name of a Secret that holds a CA certificate.
             * The referenced Secret must contain a certificate under either a tls.ca or a ca.crt key.
             */
            secret: string;
        }
        /**
         * RootCA defines a reference to a Secret or a ConfigMap that holds a CA certificate.
         * If both a Secret and a ConfigMap reference are defined, the Secret reference takes precedence.
         */
        interface ServersTransportTCPSpecTlsRootCAsPatch {
            /**
             * ConfigMap defines the name of a ConfigMap that holds a CA certificate.
             * The referenced ConfigMap must contain a certificate under either a tls.ca or a ca.crt key.
             */
            configMap: string;
            /**
             * Secret defines the name of a Secret that holds a CA certificate.
             * The referenced Secret must contain a certificate under either a tls.ca or a ca.crt key.
             */
            secret: string;
        }
        /**
         * Spiffe defines the SPIFFE configuration.
         */
        interface ServersTransportTCPSpecTlsSpiffe {
            /**
             * IDs defines the allowed SPIFFE IDs (takes precedence over the SPIFFE TrustDomain).
             */
            ids: string[];
            /**
             * TrustDomain defines the allowed SPIFFE trust domain.
             */
            trustDomain: string;
        }
        /**
         * Spiffe defines the SPIFFE configuration.
         */
        interface ServersTransportTCPSpecTlsSpiffePatch {
            /**
             * IDs defines the allowed SPIFFE IDs (takes precedence over the SPIFFE TrustDomain).
             */
            ids: string[];
            /**
             * TrustDomain defines the allowed SPIFFE trust domain.
             */
            trustDomain: string;
        }
        /**
         * TLSOption is the CRD implementation of a Traefik TLS Option, allowing to configure some parameters of the TLS connection.
         * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#tls-options
         */
        interface TLSOption {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "TLSOption";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.traefik.v1alpha1.TLSOptionSpec;
        }
        /**
         * TLSOptionSpec defines the desired state of a TLSOption.
         */
        interface TLSOptionSpec {
            /**
             * ALPNProtocols defines the list of supported application level protocols for the TLS handshake, in order of preference.
             * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#alpn-protocols
             */
            alpnProtocols: string[];
            /**
             * CipherSuites defines the list of supported cipher suites for TLS versions up to TLS 1.2.
             * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#cipher-suites
             */
            cipherSuites: string[];
            clientAuth: outputs.traefik.v1alpha1.TLSOptionSpecClientAuth;
            /**
             * CurvePreferences defines the preferred elliptic curves.
             * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#curve-preferences
             */
            curvePreferences: string[];
            /**
             * DisableSessionTickets disables TLS session resumption via session tickets.
             */
            disableSessionTickets: boolean;
            /**
             * MaxVersion defines the maximum TLS version that Traefik will accept.
             * Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13.
             * Default: None.
             */
            maxVersion: string;
            /**
             * MinVersion defines the minimum TLS version that Traefik will accept.
             * Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13.
             * Default: VersionTLS10.
             */
            minVersion: string;
            /**
             * PreferServerCipherSuites defines whether the server chooses a cipher suite among his own instead of among the client's.
             * It is enabled automatically when minVersion or maxVersion is set.
             * Deprecated: https://github.com/golang/go/issues/45430
             */
            preferServerCipherSuites: boolean;
            /**
             * SniStrict defines whether Traefik allows connections from clients connections that do not specify a server_name extension.
             */
            sniStrict: boolean;
        }
        /**
         * ClientAuth defines the server's policy for TLS Client Authentication.
         */
        interface TLSOptionSpecClientAuth {
            /**
             * ClientAuthType defines the client authentication type to apply.
             */
            clientAuthType: string;
            /**
             * SecretNames defines the names of the referenced Kubernetes Secret storing certificate details.
             */
            secretNames: string[];
        }
        /**
         * ClientAuth defines the server's policy for TLS Client Authentication.
         */
        interface TLSOptionSpecClientAuthPatch {
            /**
             * ClientAuthType defines the client authentication type to apply.
             */
            clientAuthType: string;
            /**
             * SecretNames defines the names of the referenced Kubernetes Secret storing certificate details.
             */
            secretNames: string[];
        }
        /**
         * TLSOptionSpec defines the desired state of a TLSOption.
         */
        interface TLSOptionSpecPatch {
            /**
             * ALPNProtocols defines the list of supported application level protocols for the TLS handshake, in order of preference.
             * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#alpn-protocols
             */
            alpnProtocols: string[];
            /**
             * CipherSuites defines the list of supported cipher suites for TLS versions up to TLS 1.2.
             * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#cipher-suites
             */
            cipherSuites: string[];
            clientAuth: outputs.traefik.v1alpha1.TLSOptionSpecClientAuthPatch;
            /**
             * CurvePreferences defines the preferred elliptic curves.
             * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#curve-preferences
             */
            curvePreferences: string[];
            /**
             * DisableSessionTickets disables TLS session resumption via session tickets.
             */
            disableSessionTickets: boolean;
            /**
             * MaxVersion defines the maximum TLS version that Traefik will accept.
             * Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13.
             * Default: None.
             */
            maxVersion: string;
            /**
             * MinVersion defines the minimum TLS version that Traefik will accept.
             * Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13.
             * Default: VersionTLS10.
             */
            minVersion: string;
            /**
             * PreferServerCipherSuites defines whether the server chooses a cipher suite among his own instead of among the client's.
             * It is enabled automatically when minVersion or maxVersion is set.
             * Deprecated: https://github.com/golang/go/issues/45430
             */
            preferServerCipherSuites: boolean;
            /**
             * SniStrict defines whether Traefik allows connections from clients connections that do not specify a server_name extension.
             */
            sniStrict: boolean;
        }
        /**
         * TLSStore is the CRD implementation of a Traefik TLS Store.
         * For the time being, only the TLSStore named default is supported.
         * This means that you cannot have two stores that are named default in different Kubernetes namespaces.
         * More info: https://doc.traefik.io/traefik/v3.5/https/tls/#certificates-stores
         */
        interface TLSStore {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "TLSStore";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.traefik.v1alpha1.TLSStoreSpec;
        }
        /**
         * TLSStoreSpec defines the desired state of a TLSStore.
         */
        interface TLSStoreSpec {
            /**
             * Certificates is a list of secret names, each secret holding a key/certificate pair to add to the store.
             */
            certificates: outputs.traefik.v1alpha1.TLSStoreSpecCertificates[];
            defaultCertificate: outputs.traefik.v1alpha1.TLSStoreSpecDefaultCertificate;
            defaultGeneratedCert: outputs.traefik.v1alpha1.TLSStoreSpecDefaultGeneratedCert;
        }
        /**
         * Certificate holds a secret name for the TLSStore resource.
         */
        interface TLSStoreSpecCertificates {
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            secretName: string;
        }
        /**
         * Certificate holds a secret name for the TLSStore resource.
         */
        interface TLSStoreSpecCertificatesPatch {
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            secretName: string;
        }
        /**
         * DefaultCertificate defines the default certificate configuration.
         */
        interface TLSStoreSpecDefaultCertificate {
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            secretName: string;
        }
        /**
         * DefaultCertificate defines the default certificate configuration.
         */
        interface TLSStoreSpecDefaultCertificatePatch {
            /**
             * SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.
             */
            secretName: string;
        }
        /**
         * DefaultGeneratedCert defines the default generated certificate configuration.
         */
        interface TLSStoreSpecDefaultGeneratedCert {
            domain: outputs.traefik.v1alpha1.TLSStoreSpecDefaultGeneratedCertDomain;
            /**
             * Resolver is the name of the resolver that will be used to issue the DefaultCertificate.
             */
            resolver: string;
        }
        /**
         * Domain is the domain definition for the DefaultCertificate.
         */
        interface TLSStoreSpecDefaultGeneratedCertDomain {
            /**
             * Main defines the main domain name.
             */
            main: string;
            /**
             * SANs defines the subject alternative domain names.
             */
            sans: string[];
        }
        /**
         * Domain is the domain definition for the DefaultCertificate.
         */
        interface TLSStoreSpecDefaultGeneratedCertDomainPatch {
            /**
             * Main defines the main domain name.
             */
            main: string;
            /**
             * SANs defines the subject alternative domain names.
             */
            sans: string[];
        }
        /**
         * DefaultGeneratedCert defines the default generated certificate configuration.
         */
        interface TLSStoreSpecDefaultGeneratedCertPatch {
            domain: outputs.traefik.v1alpha1.TLSStoreSpecDefaultGeneratedCertDomainPatch;
            /**
             * Resolver is the name of the resolver that will be used to issue the DefaultCertificate.
             */
            resolver: string;
        }
        /**
         * TLSStoreSpec defines the desired state of a TLSStore.
         */
        interface TLSStoreSpecPatch {
            /**
             * Certificates is a list of secret names, each secret holding a key/certificate pair to add to the store.
             */
            certificates: outputs.traefik.v1alpha1.TLSStoreSpecCertificatesPatch[];
            defaultCertificate: outputs.traefik.v1alpha1.TLSStoreSpecDefaultCertificatePatch;
            defaultGeneratedCert: outputs.traefik.v1alpha1.TLSStoreSpecDefaultGeneratedCertPatch;
        }
        /**
         * TraefikService is the CRD implementation of a Traefik Service.
         * TraefikService object allows to:
         * - Apply weight to Services on load-balancing
         * - Mirror traffic on services
         * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#kind-traefikservice
         */
        interface TraefikService {
            /**
             * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
             */
            apiVersion: "traefik.io/v1alpha1";
            /**
             * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind: "TraefikService";
            /**
             * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata: outputs.meta.v1.ObjectMeta;
            spec: outputs.traefik.v1alpha1.TraefikServiceSpec;
        }
        /**
         * TraefikServiceSpec defines the desired state of a TraefikService.
         */
        interface TraefikServiceSpec {
            mirroring: outputs.traefik.v1alpha1.TraefikServiceSpecMirroring;
            weighted: outputs.traefik.v1alpha1.TraefikServiceSpecWeighted;
        }
        /**
         * Mirroring defines the Mirroring service configuration.
         */
        interface TraefikServiceSpecMirroring {
            healthCheck: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringHealthCheck;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * MaxBodySize defines the maximum size allowed for the body of the request.
             * If the body is larger, the request is not mirrored.
             * Default value is -1, which means unlimited size.
             */
            maxBodySize: number;
            /**
             * MirrorBody defines whether the body of the request should be mirrored.
             * Default value is true.
             */
            mirrorBody: boolean;
            /**
             * Mirrors defines the list of mirrors where Traefik will duplicate the traffic.
             */
            mirrors: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrors[];
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringResponseForwarding;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringSticky;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface TraefikServiceSpecMirroringHealthCheck {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface TraefikServiceSpecMirroringHealthCheckPatch {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * MirrorService holds the mirror configuration.
         */
        interface TraefikServiceSpecMirroringMirrors {
            healthCheck: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsHealthCheck;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Percent defines the part of the traffic to mirror.
             * Supported values: 0 to 100.
             */
            percent: number;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsResponseForwarding;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsSticky;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface TraefikServiceSpecMirroringMirrorsHealthCheck {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface TraefikServiceSpecMirroringMirrorsHealthCheckPatch {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * MirrorService holds the mirror configuration.
         */
        interface TraefikServiceSpecMirroringMirrorsPatch {
            healthCheck: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsHealthCheckPatch;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Percent defines the part of the traffic to mirror.
             * Supported values: 0 to 100.
             */
            percent: number;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsResponseForwardingPatch;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsStickyPatch;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface TraefikServiceSpecMirroringMirrorsResponseForwarding {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface TraefikServiceSpecMirroringMirrorsResponseForwardingPatch {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface TraefikServiceSpecMirroringMirrorsSticky {
            cookie: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsStickyCookie;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface TraefikServiceSpecMirroringMirrorsStickyCookie {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface TraefikServiceSpecMirroringMirrorsStickyCookiePatch {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface TraefikServiceSpecMirroringMirrorsStickyPatch {
            cookie: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsStickyCookiePatch;
        }
        /**
         * Mirroring defines the Mirroring service configuration.
         */
        interface TraefikServiceSpecMirroringPatch {
            healthCheck: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringHealthCheckPatch;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * MaxBodySize defines the maximum size allowed for the body of the request.
             * If the body is larger, the request is not mirrored.
             * Default value is -1, which means unlimited size.
             */
            maxBodySize: number;
            /**
             * MirrorBody defines whether the body of the request should be mirrored.
             * Default value is true.
             */
            mirrorBody: boolean;
            /**
             * Mirrors defines the list of mirrors where Traefik will duplicate the traffic.
             */
            mirrors: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringMirrorsPatch[];
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringResponseForwardingPatch;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringStickyPatch;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface TraefikServiceSpecMirroringResponseForwarding {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface TraefikServiceSpecMirroringResponseForwardingPatch {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface TraefikServiceSpecMirroringSticky {
            cookie: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringStickyCookie;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface TraefikServiceSpecMirroringStickyCookie {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface TraefikServiceSpecMirroringStickyCookiePatch {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface TraefikServiceSpecMirroringStickyPatch {
            cookie: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringStickyCookiePatch;
        }
        /**
         * TraefikServiceSpec defines the desired state of a TraefikService.
         */
        interface TraefikServiceSpecPatch {
            mirroring: outputs.traefik.v1alpha1.TraefikServiceSpecMirroringPatch;
            weighted: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedPatch;
        }
        /**
         * Weighted defines the Weighted Round Robin configuration.
         */
        interface TraefikServiceSpecWeighted {
            /**
             * Services defines the list of Kubernetes Service and/or TraefikService to load-balance, with weight.
             */
            services: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServices[];
            sticky: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedSticky;
        }
        /**
         * Weighted defines the Weighted Round Robin configuration.
         */
        interface TraefikServiceSpecWeightedPatch {
            /**
             * Services defines the list of Kubernetes Service and/or TraefikService to load-balance, with weight.
             */
            services: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesPatch[];
            sticky: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedStickyPatch;
        }
        /**
         * Service defines an upstream HTTP service to proxy traffic to.
         */
        interface TraefikServiceSpecWeightedServices {
            healthCheck: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesHealthCheck;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesResponseForwarding;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesSticky;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface TraefikServiceSpecWeightedServicesHealthCheck {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * Healthcheck defines health checks for ExternalName services.
         */
        interface TraefikServiceSpecWeightedServicesHealthCheckPatch {
            /**
             * FollowRedirects defines whether redirects should be followed during the health check calls.
             * Default: true
             */
            followRedirects: boolean;
            /**
             * Headers defines custom headers to be sent to the health check endpoint.
             */
            headers: {
                [key: string]: string;
            };
            /**
             * Hostname defines the value of hostname in the Host header of the health check request.
             */
            hostname: string;
            /**
             * Interval defines the frequency of the health check calls for healthy targets.
             * Default: 30s
             */
            interval: number | string;
            /**
             * Method defines the healthcheck method.
             */
            method: string;
            /**
             * Mode defines the health check mode.
             * If defined to grpc, will use the gRPC health check protocol to probe the server.
             * Default: http
             */
            mode: string;
            /**
             * Path defines the server URL path for the health check endpoint.
             */
            path: string;
            /**
             * Port defines the server URL port for the health check endpoint.
             */
            port: number;
            /**
             * Scheme replaces the server URL scheme for the health check endpoint.
             */
            scheme: string;
            /**
             * Status defines the expected HTTP status code of the response to the health check request.
             */
            status: number;
            /**
             * Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.
             * Default: 5s
             */
            timeout: number | string;
            /**
             * UnhealthyInterval defines the frequency of the health check calls for unhealthy targets.
             * When UnhealthyInterval is not defined, it defaults to the Interval value.
             * Default: 30s
             */
            unhealthyInterval: number | string;
        }
        /**
         * Service defines an upstream HTTP service to proxy traffic to.
         */
        interface TraefikServiceSpecWeightedServicesPatch {
            healthCheck: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesHealthCheckPatch;
            /**
             * Kind defines the kind of the Service.
             */
            kind: string;
            /**
             * Name defines the name of the referenced Kubernetes Service or TraefikService.
             * The differentiation between the two is specified in the Kind field.
             */
            name: string;
            /**
             * Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.
             */
            namespace: string;
            /**
             * NativeLB controls, when creating the load-balancer,
             * whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.
             * The Kubernetes Service itself does load-balance to the pods.
             * By default, NativeLB is false.
             */
            nativeLB: boolean;
            /**
             * NodePortLB controls, when creating the load-balancer,
             * whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.
             * It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.
             * By default, NodePortLB is false.
             */
            nodePortLB: boolean;
            /**
             * PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.
             * By default, passHostHeader is true.
             */
            passHostHeader: boolean;
            /**
             * Port defines the port of a Kubernetes Service.
             * This can be a reference to a named port.
             */
            port: number | string;
            responseForwarding: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesResponseForwardingPatch;
            /**
             * Scheme defines the scheme to use for the request to the upstream Kubernetes Service.
             * It defaults to https when Kubernetes Service port is 443, http otherwise.
             */
            scheme: string;
            /**
             * ServersTransport defines the name of ServersTransport resource to use.
             * It allows to configure the transport between Traefik and your servers.
             * Can only be used on a Kubernetes Service.
             */
            serversTransport: string;
            sticky: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesStickyPatch;
            /**
             * Strategy defines the load balancing strategy between the servers.
             * Supported values are: wrr (Weighed round-robin) and p2c (Power of two choices).
             * RoundRobin value is deprecated and supported for backward compatibility.
             */
            strategy: string;
            /**
             * Weight defines the weight and should only be specified when Name references a TraefikService object
             * (and to be precise, one that embeds a Weighted Round Robin).
             */
            weight: number;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface TraefikServiceSpecWeightedServicesResponseForwarding {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.
         */
        interface TraefikServiceSpecWeightedServicesResponseForwardingPatch {
            /**
             * FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.
             * A negative value means to flush immediately after each write to the client.
             * This configuration is ignored when ReverseProxy recognizes a response as a streaming response;
             * for such responses, writes are flushed to the client immediately.
             * Default: 100ms
             */
            flushInterval: string;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface TraefikServiceSpecWeightedServicesSticky {
            cookie: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesStickyCookie;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface TraefikServiceSpecWeightedServicesStickyCookie {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface TraefikServiceSpecWeightedServicesStickyCookiePatch {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Sticky defines the sticky sessions configuration.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/services/#sticky-sessions
         */
        interface TraefikServiceSpecWeightedServicesStickyPatch {
            cookie: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedServicesStickyCookiePatch;
        }
        /**
         * Sticky defines whether sticky sessions are enabled.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#stickiness-and-load-balancing
         */
        interface TraefikServiceSpecWeightedSticky {
            cookie: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedStickyCookie;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface TraefikServiceSpecWeightedStickyCookie {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Cookie defines the sticky cookie configuration.
         */
        interface TraefikServiceSpecWeightedStickyCookiePatch {
            /**
             * Domain defines the host to which the cookie will be sent.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#domaindomain-value
             */
            domain: string;
            /**
             * HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.
             */
            httpOnly: boolean;
            /**
             * MaxAge defines the number of seconds until the cookie expires.
             * When set to a negative number, the cookie expires immediately.
             * When set to zero, the cookie never expires.
             */
            maxAge: number;
            /**
             * Name defines the Cookie name.
             */
            name: string;
            /**
             * Path defines the path that must exist in the requested URL for the browser to send the Cookie header.
             * When not provided the cookie will be sent on every request to the domain.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value
             */
            path: string;
            /**
             * SameSite defines the same site policy.
             * More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
             */
            sameSite: string;
            /**
             * Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).
             */
            secure: boolean;
        }
        /**
         * Sticky defines whether sticky sessions are enabled.
         * More info: https://doc.traefik.io/traefik/v3.5/routing/providers/kubernetes-crd/#stickiness-and-load-balancing
         */
        interface TraefikServiceSpecWeightedStickyPatch {
            cookie: outputs.traefik.v1alpha1.TraefikServiceSpecWeightedStickyCookiePatch;
        }
    }
}
