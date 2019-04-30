(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [boil-cljs.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote boil-cljs.core-test))