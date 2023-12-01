import {ApolloClient, DocumentNode, NormalizedCacheObject, OperationVariables, TypedDocumentNode} from "@apollo/client";
import {onErrorCallback, onResponseCallback} from "../../types/api/utils";
import {logOnError} from "../utils";

const graphql = (client:  ApolloClient<NormalizedCacheObject>, onResponse: onResponseCallback, onError: onErrorCallback = logOnError) => {
    return {
        query: (query: DocumentNode | TypedDocumentNode<any, OperationVariables>, variables: OperationVariables | undefined = undefined) => {
            client.query({
                query: query,
                variables
            }).then((res) => {

                if (res.errors) {
                    onError(res.errors.join(";\n"))
                }
                if (res.error) {
                    onError(JSON.stringify(res.error))
                }

                onResponse(res.data)
            }).catch( (err) => onError(JSON.stringify(err)) )
        }
    }
}

export default graphql